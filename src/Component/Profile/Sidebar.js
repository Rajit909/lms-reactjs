// import { useContext } from "react";
import { Link } from "react-router-dom";
// import AuthContext from "../../Context/auth-context";

const Sidebar = (props) => {
  // const authCtx = useContext(AuthContext);
  // const navigate = useNavigate();

  return (
    <nav id="sidebarWrapper">
      <div class="sidebar-content">
        <div class="navMenu ">
          <ul>
            <li>
              {/* <!-- <div id="close-sidebar">
              <i class="fas fa-times"></i>
            </div> --> */}
              <h4
                class="navHeader mt-4 pl-3"
                style={{ color: "#fff; font-weight: 600;" }}
              >
                My Profile
              </h4>
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
                <i class="fas fa-archive"></i>&ensp;Packages
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/basic">
                  Basic
                </Link>
                <a class="dropdown-item" href="/secondary.html">
                  Secondary
                </a>
                <a class="dropdown-item" href="/permium.html">
                  Premium
                </a>
                {/* <!-- <div class="dropdown-divider"></div> --> */}
              </div>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="/billgeneration">
                <i class="fas fa-receipt"></i>&ensp;Bill Generation
              </a> */}
              <Link className="nav-link" to="billGeneration">
                <i class="fas fa-receipt"></i>&ensp;Bill Generation
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="ticketManagement">
                <i class="fas fa-envelope"></i>&ensp;Ticket Management
              </Link>
            </li>
            {/* <!-- <li class="nav-item">
          <a class="nav-link" href="/index.html">
            <i class="fas fa-sign-out-alt"></i>&ensp;Logout
          </a>
        </li> --> */}
          </ul>

          <ul class="sidevav-footer">
            <li class="nav-item">
              <a class="nav-link" href="/settings.html">
                <i class="fas fa-cog"></i>&ensp;Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/settings.html">
                <i class="fas fa-info-circle"></i>&ensp;What's New
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/index.html">
                <i class="far fa-question-circle"></i>&ensp;Customer Support
              </a>
            </li>
            <li class="nav-item">
              <button
                class="nav-link"
                // href="#logout"
                type="button"
                onClick={props.authCtx.logout}
              >
                <i class="fas fa-sign-out-alt"></i>&ensp;Logout
              </button>
            </li>
          </ul>
        </div>
        {/* <!-- END navMenu  --> */}
      </div>
      {/* <!-- END sidebar-content  --> */}
    </nav>
  );
};

export default Sidebar;
