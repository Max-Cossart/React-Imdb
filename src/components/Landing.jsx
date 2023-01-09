import React from "react";
import { Link } from "react-router-dom";
import UndrawMovies from '../assets/undraw.svg'

const Landing = () => {
  return (
    <>
      <section id="landing">
        <div className="container">
          <div className="row landing__row">
            <div className="Landing">
              <h1 className="landing__title color">
                Australia's most awarded movie platform
              </h1>
              <h2 className="landing__sub-title">
                Find the movie you want to here!
              </h2>
              <div className="landing__search">
                <Link to="/movies">
                  <button className="landing__search--button pointer">
                    Search Movies
                  </button>
                </Link>
              </div>
            </div>
            <figure className="landing__img--wrapper">
              <img
                className="landing__img"
                src={UndrawMovies}
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
