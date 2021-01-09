import React from "react";
import "./hero.style.scss";

export default ({ id, name, street, street2, zipcode, city, phone }) => (
  <section data-component="hero" className={`hero bg__img bg__img__${id}`}>
    <div className="hero-body">
      <div className="container has-text-white">
        <h1 className="title has-text-white">{name}</h1>
        <p className="subtitle has-text-white">
          {`${street} ${street2 && `- ${street2}`} - ${zipcode} ${city}`}
          <br /> {phone}
        </p>
      </div>
    </div>
  </section>
);
