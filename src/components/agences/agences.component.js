/* eslint-disable max-len, no-underscore-dangle */
import React from "react";
import "./agences.style.scss";
import { Link } from "gatsby";

const createAgences = (reversed) => ({
  id,
  name,
  street,
  street2,
  zipcode,
  city,
  phone,
  thumbnail,
}) => (
  <div key={id} className="column is-half">
    <div className={`columns ${reversed && "reverse-columns"}`}>
      <div
        className={`column is-half ${
          reversed ? "has-text-left-tablet" : "has-text-right-tablet"
        } has-text-centered-mobile`}
      >
        <h2 className="has-text-weight-semibold has-text-black mt-3 mb-2">
          {name}
        </h2>
        <p>
          {`${street} ${street2 && `- ${street2}`}`}
          <br />
          {`${zipcode} ${city}`}
        </p>
        {phone && <p className="mt-4">✆ {phone}</p>}
      </div>
      <div className="column if-half has-text-centered">
        <Link to={`/${id}`}>
          <img src={thumbnail} className="is-centered" alt={name} />
        </Link>
      </div>
    </div>
  </div>
);

export default ({ agences = [] }) => {
  return (
    <section className="section mt-5">
      <div className="container">
        <div className="columns is-multiline">
          {agences.map((agence, i) =>
            createAgences((i + 1) % 2 === 0)(agence)
          )}
        </div>
      </div>
    </section>
  );
};
