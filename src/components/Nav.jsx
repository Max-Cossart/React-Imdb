import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="row header__row">
        <div className="logo">
          <Link to="/">
          <div className="logo__title">
            Movie<span className="color">Finder.</span>
          </div>
          </Link>
        </div>
        <div className="header__Links">
          <Link to="/" className="header__link link__hover-effect" >
            Home
          </Link>
          <Link to="/movies" className="header__link link__hover-effect">
            Find a Movie
          </Link>
          <a className="header__link contact__button no_cursor">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
