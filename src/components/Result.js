import swal from "@sweetalert/with-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Result = () => {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=7651fea18601554bdacd7cdd7eb018fc&language=en-US&query=${keyword}`;

    axios
      .get(endpoint)
      .then((response) => {
        let moviesArray = response.data.results;
        if (moviesArray.length === 0) {
          swal(<h5>Tu busqueda no arrojó resultados</h5>);
        }
        setMoviesResults(moviesArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [keyword]);

  return (
    <>
      <h2>
        Buscaste: <em>{keyword}</em>
      </h2>
      {moviesResults.length === 0 && <h3>No hay resultados</h3>}
      <div className="row">
        {moviesResults.map((oneMovie, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card my-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
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
