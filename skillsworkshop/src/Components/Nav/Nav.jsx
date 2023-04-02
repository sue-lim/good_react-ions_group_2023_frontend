import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const { loggedIn, setLoggedIn } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    window.localStorage.removeItem("token");
    setLoggedIn(false);
    navigate(`/`);
  };

  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <nav id="nav-bar">
      <div>
        <img
          id="logo"
          src="https://i.postimg.cc/L685TDz1/Brown-and-White-Named-Warner-Spencer-Logo-500-350px-500-150px-1.png"
        />
      </div>
      <div className="topnav" id="myTopnav">
        <a href="#" className="active"></a>
        {!loggedIn && (
          <Link className="nav-link" to="/login">
            LOGIN
          </Link>
        )}
        {loggedIn && (
          <a href="/" className="nav-link" onClick={handleClick}>
            LOGOUT
          </a>
        )}
        {!loggedIn && (
          <Link className="nav-link" to="/sign-up">
            SIGN UP
          </Link>
        )}
        {loggedIn && (
          <Link className="nav-link" to="/create-event">
            CREATE
          </Link>
        )}
        <Link to="/events" className="nav-link">
          EVENTS
        </Link>
        <Link className="nav-link" to="/">
          HOME
        </Link>

        <a href="#" className="icon" onClick={myFunction}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
