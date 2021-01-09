/* eslint-disable max-len, no-underscore-dangle */
import React, { useState } from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Modal from "../components/modal";
import { split } from "../utils/common.utils";
import "./detail.style.scss";

const buildPosition = (position) => {
  const splitedPosition = split(position);
  const size = splitedPosition.length;

  return splitedPosition.map((el, index) => (
    <React.Fragment key={`br-${index}`}>
      {el} {index !== size - 1 && <br />}
    </React.Fragment>
  ));
};

const createUser = (setModal) => ({
  id,
  agence,
  email,
  firstname,
  mobile,
  name,
  phone,
  position,
  url,
}) => (
  <div
    key={`${agence}-${firstname}-${name}`}
    className="column is-3 has-text-centered-mobile"
  >
    <a
      tabIndex={0}
      role="button"
      onClick={() => {
        document.querySelector("html").classList.add("is-clipped");
        setModal({
          id,
          agence,
          email,
          firstname,
          mobile,
          name,
          phone,
          position,
          url,
          opened: true,
        });
      }}
      onKeyUp={() => {
        document.querySelector("html").classList.add("is-clipped");
        setModal({
          id,
          agence,
          email,
          firstname,
          mobile,
          name,
          phone,
          position,
          url,
          opened: true,
        });
      }}
    >
      <img className="img__employees" src={url} alt={`${firstname} ${name}`} />
    </a>
    <p className="has-text-weight-semibold has-text-black">{`${firstname} ${name.toUpperCase()}`}</p>

    <p>{buildPosition(position)}</p>
  </div>
);

const createTeam = (id) => (agence) => (setModal) => (team) => (
  <div key={`${agence}-${team.label}`} className="columns is-multiline">
    <div className="column is-full">
      <h2 className="is-size-4 has-text-weight-semibold has-text-black">
        {team.label}
      </h2>
    </div>
    {team.users.map((user) => createUser(setModal)({ ...user, agence, id }))}
  </div>
);

export default ({ pageContext }) => {
  const { agence } = pageContext;
  const [modal, setModal] = useState({
    id: agence.id,
    agence: agence.name,
    email: "",
    firstname: "",
    name: "",
    phone: "",
    position: "",
    url: "",
    opened: false,
  });

  return (
    <Layout>
      <Hero
        id={agence.id}
        name={agence.name}
        street={agence.street}
        street2={agence.street2}
        zipcode={agence.zipcode}
        city={agence.city}
        phone={agence.phone}
      />
      <section data-component="detail" className="section mt-5">
        <div className="container">
          {agence.organisation.map(
            createTeam(agence.id)(agence.name)(setModal)
          )}
        </div>
      </section>

      {modal && modal.opened === true && (
        <Modal
          {...modal}
          onClose={() => {
            document.querySelector("html").classList.remove("is-clipped");
            setModal({ ...modal, opened: false });
          }}
        />
      )}
    </Layout>
  );
};
