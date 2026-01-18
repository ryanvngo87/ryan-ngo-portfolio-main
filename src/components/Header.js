import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo">
          ryan.ngo
        </Link>
      </div>
      <nav className="navbar-links">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/experience">experience</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
