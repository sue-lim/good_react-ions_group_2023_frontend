// import React from "react";
// import { Link } from "react-router-dom";
// import "./Nav.css";

// function Nav() {
//   const myFunction = () => {
//     var x = document.getElementById("nav-list");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   };

//   return (
//     <nav className="topnav" id="nav-bar">
// <div>
//   <img
//     id="logo"
//     src="https://i.postimg.cc/L685TDz1/Brown-and-White-Named-Warner-Spencer-Logo-500-350px-500-150px-1.png"
//   />
// </div>
//       <div id="nav-list">
//         <Link className="active" to="/">
//           HOME
//         </Link>
//         <Link className="nav-link" to="/#AboutUs">
//           ABOUT
//         </Link>
//         <Link className="nav-link" to="/create-event">
//           CREATE
//         </Link>
//         <Link className="nav-link" to="/sign-up">
//           SIGN UP
//         </Link>
//         <Link className="nav-link" to="/login">
//           LOGIN
//         </Link>
//       </div>
//       <a href="javascript:void(0);" className="icon" onClick={myFunction}>
// <span className="bar"></span>
// <span className="bar"></span>
// <span className="bar"></span>
//       </a>
//     </nav>
//   );
// }

// export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
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
        <a href="/">NEWS</a>
        <a href="#contact">CONTACT</a>
        <a href="#about">ABOUT</a>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
