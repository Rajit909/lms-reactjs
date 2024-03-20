import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../Services/firebase";
import AuthContext from "../Context/auth-context";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  // const [error, setError] = useState(null);
  const [userCred, setUserCred] = useState({
    email: "",
    password: ""
  });
  const [userId, setUserId] = useState(null);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  // let userId = null;

  const changeHandler = (event) => {
    let val = event.target.value;
    setUserCred((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // firebase signin auth
    auth
      .signInWithEmailAndPassword(
        userCred.email.trim(),
        userCred.password.trim()
      )
      .then((userCredential) => {
        // Signed in
        let userAuth = userCredential.user;
        let userId = userAuth.uid;
        setUserId(userId);
        let photoUrl = "";
        console.log("userId", userId);
        let isEmailVerified = userAuth.emailVerified;
        if (isEmailVerified) {
          // get the particular user, using the
          db.collection("admin")
            .doc(userId)
            .get()
            .then((doc) => {
              let user = doc.data();
              console.log("signin", user);
              photoUrl = user.photoUrl;
              // localStorage.setItem("userId", userId);
              // to identify, whether reloading or closing the tab
              sessionStorage.setItem("userId", userId);
              // authCtx.setIsLoggedIn(true);
              // props.history.replace("/dashboard/home"); // redirect it to home
              navigate("/admin", { replace: true });
              authCtx.setUser({
                ...user,
                // isLoggedIn: true,
                password: userCred.password,
                photoUrl: photoUrl
              });
              // authCtx.setHistory(props.history);
            })
            .catch((e) => console.log(e));
        } else {
          alert("Email is not verified!!!, Please verify email to login!!!");
          let resendMail = window.confirm(
            "Click yes to resend verification email!!!"
          );
          if (resendMail) {
            userCredential.user
              .sendEmailVerification({
                url: "https://vfgzg.csb.app/login"
              })
              .then(() => {
                alert(
                  "Email sent, Please check your mailbox!!! If not found please check in spam folder!!!"
                );
              })
              .catch((e) => console.log(e));
            auth.signOut();
          }
        }
      })
      .catch((e) => {
        console.log(e.code);
        if (e.code === "auth/wrong-password") {
          alert("Incorrect password. Try again.");
        } else if (e.code === "auth/network-request-failed") {
          alert("Internet connection is down!!!");
        } else {
          alert("User doesn't exist. Please do register.");
        }
      });
  };

  return (
    <>
      <div class=" Loginpage">
        <div className="login-form">
          <div class="body">
            <div class="content ">
              <div class="text">Login Form</div>
              <form onSubmit={submitHandler}>
                <div class="field">
                  <input
                    type="text"
                    name="email"
                    value={userCred.email}
                    onChange={changeHandler}
                    required
                  />
                  <span class="fas fa-user"></span>
                  <label>Email</label>
                </div>
                <div class="field">
                  <input
                    type="password"
                    name="password"
                    value={userCred.password}
                    onChange={changeHandler}
                    required
                  />
                  <span class="fas fa-lock"></span>
                  <label>Password</label>
                </div>
                <div class="forgot-pass">
                  <a href="#0">Forgot Password?</a>
                </div>
                <button type="submit">Sign in</button>
                <div class="sign-up">
                  Not a member?
                  <Link to="/signup">signup now</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
