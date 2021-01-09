import React from "react";
import "./navbar.style.scss";
import { Link } from "gatsby";

const Navbar = ({ agences }) => (
  <section data-component="navbar" className="section py-4 section__nav">
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/"></a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/articles" activeClassName="active">
              Articles
            </Link>
            <Link className="navbar-item" to="/queriedpage" activeClassName="active">
              Queried
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Agences</a>
              <div className="navbar-dropdown">
                {agences.map(({ id, name }) => (
                  <Link key={`navbar-link-${id}`} className="navbar-item" activeClassName="active" to={`/${id}` }>
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="navbar-end">
        
            <Link className="navbar-item" to="/" activeClassName="active">
              Accueil
            </Link>
  
          </div>
        </div>
      </nav>
    </div>
  </section>
);

export default Navbar;
