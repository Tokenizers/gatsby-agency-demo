import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { mapGraphResultToList } from "../../utils/graphquery.utils";
import View from "./map.component";

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markers: allAgencesJson {
            edges {
              node {
                id
                name
                street
                street2
                zipcode
                city
                coordinates
              }
            }
          }
        }
      `}
      render={({ markers }) => (
        <View markers={mapGraphResultToList(markers)} {...props} />
      )}
    />
  );
};
