import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <>
      <a id="show-sidebar" className="btn btn-sm" href="#0">
        <i className="fas fa-bars"></i>
      </a>
      <nav id="sidebarWrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href="#0">Welcome Back ! Admin</a>
            <div id="close-sidebar">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="navMenu">
            <ul>
              <li>
                <h4
                  className="navHeader mt-4 pl-3"
                  style={{ color: "#3f6ad8" }}
                >
                  Dashboard
                </h4>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="home">
                  <i className="fas fa-home"></i>&ensp;Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="package">
                  <i className="fas fa-cog"></i>&ensp;Package
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="adminticketmanagement">
                  <i className="fab fa-buffer"></i>&ensp;Tickets Management
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={props.authCtx.logout}>
                  <i className="fas fa-sign-out-alt"></i>&ensp;Logout
                </button>
              </li>
            </ul>
          </div>
          {/* <!-- END navMenu  --> */}
        </div>
        {/* <!-- END sidebar-content  --> */}
      </nav>
      {/* <!-- END #sidebarWrapper  --> */}
    </>
  );
};
export default Sidebar;
