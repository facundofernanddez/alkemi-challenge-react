import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const List = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  });

  return (
    <>
      {/* {!token && redirect("/login")} */}

      <div className="row">
        <div className="col-4">
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
      </div>
    </>
  );
};
