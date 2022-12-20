import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieInfo = () => {
  const { state } = useLocation();
  const { id, poster } = state;
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState();

  async function fetchMovieInfo() {
    setLoading(true);
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=7840b18e&i=${id}`
    );
    setMovieInfo(response.data);
    setLoading(false);
  }
  console.log(movieInfo);

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row__movie-info">
          <Link to="/movies" className="movies--btn">
            ⬅ Movies
          </Link>
          <div className="movieInfo__description">
            {loading ? (
              <FontAwesomeIcon className="loading__spinner" icon="spinner" />
            ) : (
              <>
                <figure className="movie__poster--wrapper">
                  <img
                    className="movie__poster"
                    src={movieInfo.Poster}
                    alt=""
                  />
                </figure>
                <div className="movie__description">
                  <h1 className="movieInfo__description--title">
                    {movieInfo.Title}
                  </h1>
                  <p className="movieInfo__description--info">
                    <span className="description__info--title">
                      {" "}
                      Rating <br />{" "}
                    </span>
                    {movieInfo.imdbRating}/10
                  </p>
                  <p className="movieInfo__description--info">
                    <span className="description__info--title">
                      {" "}
                      Year
                      <br />
                    </span>
                    {movieInfo.Year}
                  </p>
                  <p className="movieInfo__description--info">
                    <span className="description__info--title">
                      {" "}
                      Stars
                      <br />
                    </span>
                    {movieInfo.Actors}
                  </p>
                  <p className="movieInfo__description--info">
                    <span className="description__info--title">
                      {" "}
                      Plot
                      <br />
                    </span>
                    {movieInfo.Plot}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
