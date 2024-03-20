import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Services/firebase";

const AuthContext = React.createContext({
  user: {
    id: "",
    name: "",
    domain: "",
    email: "",
    phone: "",
    password: "",
    photoUrl: "",
    package: {
      name: "",
      status: "",
      purchaseDate: "",
      dueDate: ""
    }
  },
  isLoggedIn: false,
  setUser: (user) => {},
  setIsLoggedIn: () => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let userId = sessionStorage.getItem("userId");
    if (userId !== null) {
      // auth.onAuthStateChanged((user) => {
      //   if (user !== null) {
      //   }
      // });
      db.collection("admin")
        .doc(userId)
        .get()
        .then((doc) => {
          setUser(doc.data());
          setIsLoggedIn(true);
        })
        .catch((e) => console.log(e));
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const setMyUser = (user) => {
    // console.log("Setting User", user);
    setUser(user);
  };

  const setLoggedIn = (status) => {
    setIsLoggedIn(status);
  };

  const logoutHandler = () => {
    // console.log("logout");
    // return true;
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("signed out successfully...");
        // alert("signed out");
        navigate("/login");
        // return true;
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        // return false;
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setMyUser,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setLoggedIn,
        logout: logoutHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
