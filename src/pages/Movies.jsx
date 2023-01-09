import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Movie from "./MovieInfo";

const Movies = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState(id);
  const [loading, setLoading] = useState();

  function searchInput() {
    fetchMovies(searchTitle);
  }

  async function fetchMovies(title) {
    if (title === undefined) {
      return;
    } else {
      setLoading(true);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=7840b18e&s=${title}`
        );
        setMovies(response.data);
        setLoading(false);
        console.log(movies)
    }
  }


  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <header className="movies__header">
        <div className="container">
          <div className="row row-1">
            <div className="logo__title white">
              Movie<span className="color">Finder.</span>
            </div>
            <div>
              <Link
                to="/"
                className="header__link link__hover-effect link__hover-effect-white white"
              >
                Home
              </Link>
              <Link
                to="#"
                className="header__link link__hover-effect link__hover-effect-white white"
              >
                Find a Movie
              </Link>
              <Link to="" className="header__link contact__button no_cursor">
                Contact
              </Link>
            </div>
          </div>
          <div className="movies__title--wrapper">
            <h1 className="movies__title white">Browse our Movies</h1>
          </div>
          <div className="row row-2">
            <div className="movies__search">
              <input
                type="text"
                className="movies__search--bar"
                value={searchTitle}
                onChange={(event) => setSearchTitle(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    searchInput();
                  }
                }}
                placeholder="Search by Movie Title"
              />
              <button
                className="movies__search--button pointer"
                onClick={searchInput}
              >
                <FontAwesomeIcon icon="magnifying-glass" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="movie__cards">
        {loading ? (
          <FontAwesomeIcon className="loading__spinner" icon="spinner" />
        ) : (
          movies.Search?.map((movies) => (
            <div className="movie__card--wrapper" key={movies.imdbID}>
              <div className="movie__card">
                <figure className="poster__wrapper">

                  <img
                    className="poster__img pointer"
                    src={movies.Poster}
                    onClick={() => navigate(`/movies/${movies.imdbID}`, {
                      state: { id: movies.imdbID, poster: movies.Poster },
                    })}
                  />
                </figure>
                <div className="movie__description">
                  <h3 className="movie__description--title">{movies.Title}</h3>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Movies;
