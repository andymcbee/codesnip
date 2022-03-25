import React from "react";
import { Link } from "react-router-dom";

export default function NavbarGlobal() {
  return (
    <div className="navBar">
      <div className="menu">
        <ul>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/categories">
              <p>All Categories</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
