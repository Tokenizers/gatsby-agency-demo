import React from "react";
import { split } from "../../utils/common.utils";
import "./modal.scss";

const buildPosition = (position) => {
  const splitedPosition = split(position);
  const size = splitedPosition.length;

  return splitedPosition.map((el, index) => (
    <>
      {el} {index !== size - 1 && <br />}
    </>
  ));
};

export default ({
  id,
  agence,
  email,
  firstname,
  mobile,
  name,
  phone,
  position,
  url,
  onClose = () => {},
}) => (
  <div data-component="modal" className="modal is-active">
    <div
      role="button"
      tabIndex={0}
      className="modal-background"
      onClick={onClose}
      onKeyUp={onClose}
    />
    <div className="modal-card">
      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      />
      <section className="modal-card-body">
        <div className="columns is-vcentered">
          <div className="column px-5 py-5">
            <img className="img__employee" src={url} alt={firstname} />
          </div>
          <div className="column modal-content px-5 py-5">
            <p className="has-text-weight-semibold has-text-black">
              {`${firstname} ${name.toUpperCase()}`}
            </p>
            <p>{buildPosition(position)}</p>
            {phone && (
              <div className="columns mb-0">
                <div className="column is-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 400 400"
                  >
                    <defs />
                    <g transform="translate(-771 -1388)">
                      <circle cx="971.2" cy="1588.3" r="200.3" fill="#6B78ED" />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M1054.249 1689.1l19.5-19.6c5.4-5.4 5.4-14.2 0-19.6l-39.1-29.4c-5.6-5-14-5-19.5 0l-12 12c-13-9.6-25.4-20.2-36.9-31.6-13-13.2-25-27.4-36-42.3l11.7-11.6c4.9-5.6 4.9-14 0-19.6l-29.3-39.2c-4.6-5.4-12.7-6-18.1-1.4-.5.4-1 .9-1.4 1.4l-19.5 19.6c-10.8 10.8-7.3 24.9 0 39.2 17.1 29.1 37.6 56.1 61.1 80.3 24.5 23.5 51.5 44.2 80.5 61.8 15.4 5.6 28.2 10.8 39 0"
                        clipRule="evenodd"
                      />
                    </g>
                  </svg>
                </div>

                <div className="column">
                  <p>Téléphone</p>
                  <a
                    href={`tel:${phone}`}
                    className="has-text-weight-medium has-text-black"
                  >
                    {phone}
                    {mobile && (
                      <>
                        <br />
                        {mobile}
                      </>
                    )}
                  </a>
                </div>
              </div>
            )}
            <div className="columns mb-0">
              <div className="column is-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 400 400"
                >
                  <defs />
                  <g transform="translate(-771 -1458)">
                    <circle cx="971" cy="1658" r="200" fill="#6B78ED" />
                    <path
                      fill="#fff"
                      d="M1042.6 1591.3h-151c-13.9 0-25.2 11.3-25.2 25.2v107.9c0 13.9 11.3 25.2 25.2 25.2h151.1c13.9 0 25.2-11.3 25.2-25.2v-107.9c-.1-13.9-11.4-25.2-25.3-25.2zm-6.4 41.6l-64.8 50.4c-2.6 2-6.2 2-8.8 0l-64.8-50.4c-3.1-2.4-3.7-7-1.3-10.1 2.4-3.1 7-3.7 10.1-1.3l60.3 47 60.3-47c3.1-2.4 7.7-1.9 10.1 1.3 2.6 3.2 2.1 7.7-1.1 10.1z"
                    />
                  </g>
                </svg>
              </div>
              <div className="column">
                <p>Email</p>
                <a
                  href={`mailto:${email}`}
                  className="has-text-weight-medium has-text-black"
                >
                  {email}
                </a>
              </div>
            </div>
            <div className="columns mb-0">
              <div className="column is-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 400 400"
                >
                  <defs />
                  <g transform="translate(-771 -1540)">
                    <circle cx="971" cy="1740" r="200" fill="#6B78ED" />
                    <path
                      fill="#fff"
                      d="M973 1618.3c-44.4 0-80.3 36-80.3 80.3 0 13.3 3.3 26.4 9.6 38.1l66.3 119.9c1.3 2.4 4.4 3.3 6.8 2 .8-.5 1.5-1.1 2-2l66.3-119.9c21-39 6.5-87.8-32.6-108.8-11.6-6.3-24.7-9.6-38.1-9.6zm0 120.4c-22.2 0-40.1-18-40.1-40.1 0-22.2 18-40.1 40.1-40.1 22.2 0 40.1 18 40.1 40.1.1 22.1-17.9 40.1-40.1 40.1z"
                    />
                  </g>
                </svg>
              </div>
              <div className="column">
                <p>Agence</p>
                <a
                  href={`/${id}`}
                  className="has-text-weight-medium has-text-black"
                >
                  {agence}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);
