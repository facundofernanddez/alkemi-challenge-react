import { Navigate, Link } from "react-router-dom";

export const Favorites = (props) => {
  let token = sessionStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/" />}
      <h2>Seccion de favoritos</h2>
      <div className="row">
        {!props.favs.length && (
          <div className="col-12 text-danger">No tenes nada en favoritos</div>
        )}
        {props.favs.map((oneMovie, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card my-4">
                <img src={oneMovie.imgURL} className="card-img-top" alt="..." />
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
