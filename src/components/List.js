import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const List = (props) => {
  const [moviesList, setMoviesList] = useState([]);

  let token = sessionStorage.getItem("token");

  useEffect(() => {
    const endpoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=7651fea18601554bdacd7cdd7eb018fc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

    axios
      .get(endpoint)
      .then((res) => {
        const apiData = res.data;
        setMoviesList(apiData.results);
      })
      .catch((e) => {
        <h2>Hubo errores intenta mas tarde</h2>;
      });
  }, [setMoviesList]);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="row">
        {moviesList.map((oneMovie, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card my-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <button
                  className="favourite-btn"
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={oneMovie.id}
                >
                  🖤
                </button>
                <div className="card-body">
                  <h5 className="card-title">
                    {oneMovie.title.substring(0, 30)}
                    ...
                  </h5>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 100)}
                    ...
                  </p>
                  <Link
                    to={`/detail?movieID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
                    View detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
