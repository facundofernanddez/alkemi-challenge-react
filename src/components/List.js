import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const List = () => {
  const navigate = useNavigate();

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    const endpoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=7651fea18601554bdacd7cdd7eb018fc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    if (!token) {
      navigate("/");
    }

    axios.get(endpoint).then((res) => {
      const apiData = res.data;
      setMoviesList(apiData.results);
    });
  }, [setMoviesList]);

  return (
    <>
      {/* {!token && redirect("/login")} */}

      <div className="row">
        {moviesList.map((oneMovie, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Movie title</h5>
                  <p className="card-text">Movie review</p>
                  <Link to="" className="btn btn-primary">
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
