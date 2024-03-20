import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        {/* <a class="navbar-brand" href="#0">
          LMS
        </a> */}
        <Link className="navbar-brand" to="/admin/userProfile">
          LMS
        </Link>
        <button class="navbar-toggler" id="show-sidebar" type="button">
          {/* <!-- data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation" --> */}
          <i class="fas fa-bars"></i>
        </button>
        {/* <!-- <a class="nav-link pink-btn"  href="/login.html"><i class="fas fa-sign-out-alt"></i></a> --> */}
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            {/* <!-- <li class="nav-item">
                  <a class="nav-link text-capitalize text-dark" href="#">Home</a>
                </li> --> */}
            {/* <!-- <li class="nav-item">
                  <a class="nav-link text-capitalize text-dark" href="#">
                    About Us
                  </a>
                </li> --> */}
            {/* <!-- <li class="nav-item">
                  <a class="nav-link text-capitalize text-dark" href="#">
                    Services
                  </a>
                </li> --> */}
            {/* <!-- <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-capitalize text-dark"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Packages
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/basic.html">Basic</a>
                    <a class="dropdown-item" href="/secondary.html">Secondary</a>
                    <a class="dropdown-item" href="/permium.html">Premium</a>
                    <div class="dropdown-divider"></div>
                  </div>
                </li> --> */}
            {/* <!-- <li class="nav-item">
                  <a class="nav-link text-capitalize text-dark" href="#">Contact</a>
                </li> --> */}
            {/* <!-- <li class="nav-item">
                  <a class="nav-link pink-btn" href="/login.html"><i class="fas fa-sign-out-alt"></i></a>
                </li> --> */}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
