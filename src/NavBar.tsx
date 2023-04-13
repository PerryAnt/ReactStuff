import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/CheckoutLines">Checkout Lines</Link>
        </li>
        <li>
          <Link to="/problem2">problem 2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
