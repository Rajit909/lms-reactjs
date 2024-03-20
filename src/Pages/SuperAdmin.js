import React, { useContext, useEffect } from "react";
import "./Admin.css";
import Sidebar from "../Component/Admin/Sidebar";
import Navbar from "../Component/Admin/Navbar";
import { Outlet } from "react-router";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/auth-context";

const SuperAdmin = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    navigate("home");
  }, []);

  $("#close-sidebar").click(function () {
    $(".htmlBody").removeClass("toggled");
  });
  $("#show-sidebar").click(function () {
    $(".htmlBody").addClass("toggled");
  });
  $("#collapsible").click(function () {
    $(".content").toggle();
  });
  return (
    <>
      <div class="htmlBody toggled Adminpage">
        <Sidebar authCtx={authCtx} />
        <div class="page-content">
          <main class="container-fluid">
            <Navbar />
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
export default SuperAdmin;
