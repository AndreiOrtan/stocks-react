import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h3 className="header">My App</h3>
        <Link to={"/"} className="home-button">
          <button className="ui button"> Home</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
