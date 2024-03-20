import React, { useEffect } from "react";
import "./Profile.css";
import Navbar from "../Component/Profile/Navbar";
import Sidebar from "../Component/Profile/Sidebar";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import Bill from "../Component/Profile/Billgenerate";
// import UserProfile from "../Component/Profile/UserProfile";
// import BillGeneration from "../Component/Profile/Billgenerate";

const Admin = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("userProfile");
  }, []);

  return (
    <>
      <section id="non-printable">
        <div className="Profilepage">
          <Navbar />
          <div class="htmlBody toggled">
            <Sidebar authCtx={props.authCtx} />
            <Outlet />
          </div>
        </div>
      </section>
      <Bill />
    </>
  );
};
export default Admin;
