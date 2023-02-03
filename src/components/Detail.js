import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Detail() {
  let token = sessionStorage.getItem("token");

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=7651fea18601554bdacd7cdd7eb018fc&language=en-US`;

    axios
      .get(endPoint)
      .then((res) => {
        const movieData = res.data;
        setMovie(movieData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [movieID]);

  return (
    <>
      {!token && <Navigate to="/" />}
      {!movie && <p>Cargando...</p>}
      {movie && (
        <>
          <div className="container">
            <h2>Titulo: {movie.title}</h2>
            <div className="row g-2">
              <div className="col-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="img-fluid"
                  alt="..."
                />
              </div>

              <div className="col-8">
                <h5>Fecha de estreno: {movie.release_date}</h5>
                <h5>Reseña:</h5>
                <p>{movie.overview}</p>
                <h5>Generos:</h5>
                <ul>
                  {movie.genres.map((oneGenre) => {
                    return <li key={oneGenre.id}>{oneGenre.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
