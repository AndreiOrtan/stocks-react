import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="grey darken-3">
      <div className="container row">
        <h3 className="main_header col s12 m4 l2">My App</h3>
        <div className="col s12 m4 l8"></div>

        <Link to={"/"} className="col s12 m4 l2">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Header;
