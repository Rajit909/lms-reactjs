import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          {/* <a class="navbar-brand" href="#0"></a> */}
          <Link to="/" className="navbar-brand">
            LMS
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link text-capitalize text-dark" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link text-capitalize text-dark" to="#0">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-capitalize text-dark" href="#0">
                  Services
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-capitalize text-dark"
                  href="#0"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Packages
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/packages/basic">
                    Basic
                  </Link>
                  <Link class="dropdown-item" to="/packages/secondary">
                    Secondary
                  </Link>
                  <Link class="dropdown-item" to="/packages/premium">
                    Premium
                  </Link>
                  {/* <!-- <div class="dropdown-divider"></div> --> */}
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link text-capitalize text-dark" href="#contactus">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link pink-btn" href="/login.html">
                  <b>Login</b>
                </a> */}
                <Link class="nav-link pink-btn" to="/login">
                  <b>Login</b>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
