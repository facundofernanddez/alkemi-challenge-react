import { Link } from "react-router-dom";

//Components
import { Search } from "./Search";

export const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                Favorites
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <span className="text-success">
                {props.favs.length > 0 && (
                  <>Peliculas en favoritos: {props.favs.length}</>
                )}
              </span>
            </li>
          </ul>
          <Search />
        </div>
      </nav>
    </header>
  );
};
