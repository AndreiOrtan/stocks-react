import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";

const Header = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="container">
      <nav className="navbar">
        <h3 className="header">My App</h3>
        <Link to={"/"} className="home-button">
          <button className="ui button"> Home</button>
        </Link>

        {isAuthenticated ? (
          <Profile />
        ) : (
          <button className="ui button" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
