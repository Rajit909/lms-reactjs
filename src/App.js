import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Reset from "./Pages/Reset";
import Admin from "./Pages/Admin";
import PageNotFound from "./UI/404Error";
import SuperAdmin from "./Pages/SuperAdmin";
import UserProfile from "./Component/Profile/UserProfile";
import BillGeneration from "./Component/Profile/Billgenerate";
import Ticket from "./Component/Profile/Ticket";
import AdminProfile from "./Component/Admin/AdminProfile";
import Package from "./Component/Admin/Package";
import Packages from "./Component/Home/Packages/Package";
import TicketManagement from "./Component/Admin/TicketManagement";
import { useContext } from "react";
import AuthContext from "./Context/auth-context";
// import Basic from "./Component/Home/Packages/Basic";
// import Secondary from "./Component/Home/Packages/Secondary";
// import Premium from "./Component/Home/Packages/Premium";

export default function App(props) {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Routes>
        {/* admin */}
        <Route path="/admin" element={<Admin authCtx={authCtx} />}>
          <Route
            path="userProfile"
            element={<UserProfile authCtx={authCtx} />}
          />
          <Route
            path="billGeneration"
            element={<BillGeneration authCtx={authCtx} />}
          />
          <Route
            path="ticketManagement"
            element={<Ticket authCtx={authCtx} />}
          />
        </Route>
        {/* super admin */}
        <Route path="/sa" element={<SuperAdmin />}>
          <Route path="home" element={<AdminProfile />} />
          <Route path="package" element={<Package />} />
          <Route
            path="adminticketmanagement"
            element={<TicketManagement authCtx={authCtx} />}
          />
        </Route>
        {/* packages */}
        <Route path="/packages/basic" element={<Packages type="basic" />} />
        <Route
          path="/packages/secondary"
          element={<Packages type="secondary" />}
        />
        <Route path="/packages/premium" element={<Packages type="premium" />} />
        {/* login, signup, portfolia(Home) */}
        <Route path="/reset" element={<Reset />} />
        <Route path="/signup" element={<Signup {...props} />} />
        <Route path="/login" element={<Login {...props} />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
