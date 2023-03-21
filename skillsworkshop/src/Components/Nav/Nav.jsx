import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav id="nav-bar">
      <div>
        <img
          id="logo"
          src="https://i.postimg.cc/L685TDz1/Brown-and-White-Named-Warner-Spencer-Logo-500-350px-500-150px-1.png"
        />
      </div>
      <div id="nav-list">
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Nav;
