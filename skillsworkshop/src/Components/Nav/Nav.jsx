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
      <ul id="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Mentors</li>
        <li>Sign Up</li>
        <li>Log In</li>
      </ul>
    </nav>
  );
}

export default Nav;
