/* eslint-disable max-len, no-underscore-dangle */
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useEffect, useRef } from "react";
import "./map.style.scss";

export default ({ markers = [] }) => {
  // // this ref holds the map DOM node so that we can pass it into Mapbox GL
  const mapNode = useRef(null);

  // // this ref holds the map object once we have instantiated it, so that we
  // // can use it in other hooks
  const mapRef = useRef(null);

  // construct the map within an effect that has no dependencies
  // this allows us to construct it only once at the time the
  // component is constructed.
  useEffect(() => {
    mapboxgl.accessToken = process.env.GATSBY_MAPBOX_API_TOKEN;

    const map = new mapboxgl.Map({
      container: mapNode.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [2.6984690560683475, 45.58575326445353],
      zoom: 5.543141585727974,
    });

    // GEOCODER
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl,
    });

    document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
    // FIN GEOCODER

    // code from the next step will go here!
    const geojson = {
      type: "FeatureCollection",
      features: markers.map(
        ({ id, name, street, street2, zipcode, city, coordinates }) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates,
          },
          properties: {
            title: name,
            description: `<p>
                ${street} ${street2 && `- ${street2}`} - ${zipcode} ${city}
              </p>
              <a href="/${id}"><button class="btn__map">Voir l'agence</button></a>`,
          },
        })
      ),
    };

    //
    // add markers to map
    geojson.features.forEach(function(marker) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates);

      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `
              <h3>
                ${marker.properties.title}
              </h3>
              <p>
                ${marker.properties.description}
              </p>
              `
            )
        )
        .addTo(map);
    });
    // create DOM element for the marker

    mapRef.current = map;

    // for easier debugging and querying via console
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      window.map = map;
    }

    // // when this component is destroyed, remove the map
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <section
      data-component="map"
      className="section"
      style={{ paddingTop: "1rem" }}
    >
      <div className="container">
        <div className="content has-text-black has-text-centered">
          <div className="columns is-centered">
            <div className="column is-12" style={{ maxHeight: "500px" }}>
              <div id="map" ref={mapNode} />
              <div id="geocoder" className="geocoder" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
