import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="nav navbar">
        <ul>
          <li className="nav nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav nav-item">
            <Link to="/list">List</Link>
          </li>
          <li className="nav nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
