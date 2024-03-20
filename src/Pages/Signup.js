import React, { useEffect, useState } from "react";
import "./Login.css";
import { db, auth } from "../Services/firebase";
import { Link, useNavigate } from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [userDetails, setUserDetails] = useState({
    // id: "",
    uname: "",
    email: "",
    phone: ""
    // domain: ""
  });

  useEffect(() => {
    alert(
      "Enter Correct Email Address. We will send password recovery and sensitive information through mail."
    );
  }, []);

  const changeHandler = (event) => {
    let val = event.target.value;

    setUserDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val
      };
    });
  };

  // new user signup
  const signUpAuth = (event) => {
    // add a loader to know its processing...
    event.preventDefault();
    // console.log(event.target);
    // console.log(userDetails.password.length);
    if (userDetails.phone.length < 10) {
      // setError("Enter Valid Phone Number!!!");
      alert("Enter Valid Phone Number!!!");
    } else if (!userDetails.email.includes(".")) {
      alert("Enter Valid Email!!!");
    } else {
      console.log("user", userDetails);
      // let index = userDetails.email.indexOf("@");
      let password = btoa(userDetails.uname);
      // let password =
      //   userDetails.email.substring(0, index) +
      //   userDetails.phone.substr(userDetails.phone.length - 5);
      console.log("password" + password);
      auth
        .createUserWithEmailAndPassword(
          userDetails.email.trim(),
          password.trim()
        )
        .then((userCred) => {
          let id = userCred.user.uid;
          // const user = auth.currentUser;
          const user = userCred.user;
          // email - correct
          // mail will be sent
          // email - wrong or email not verified
          // user.emailVerified, email verification link?
          user
            .sendEmailVerification({
              url: "https://vfgzg.csb.app/login"
            })
            .then(() => {
              alert(
                "Email sent, Please check your mailbox!!! If not found please check in spam folder!!!"
              );
            })
            .catch((e) => console.log(e));

          user.updateProfile({
            displayName: userDetails.uname
          });

          db.collection("admin")
            .doc(id)
            .set({
              id: id,
              name: userDetails.uname,
              email: userDetails.email,
              phone: userDetails.phone,
              // domain: userDetails.domain,
              password: password.trim(),
              photoUrl: "https://www.w3schools.com/howto/img_avatar.png"
              // isLoggedIn: false
            })
            .then((docRef) => {
              auth.signOut();
              setError("");
              setUserDetails({
                id: "",
                uname: "",
                email: "",
                phone: ""
                // domain: "",
                // password: "",
                // confirmPassword: ""
              });
              // console.log("successfully updated to firestore.");
              // props.history.replace("/login"); // push to login
              navigate("/login", { replace: true });
            })
            .catch((e) => console.log(e, "firestore"));
        })
        .catch((e) => {
          if (e.code === "auth/email-already-in-use") {
            alert("Email already exists!!! Try with different email.");
            setUserDetails({
              id: userDetails.id,
              uname: userDetails.uname,
              // lname: userDetails.lname,
              email: "",
              phone: userDetails.phone
              // domain: "",
              // password: "",
              // confirmPassword: ""
            });
          } else {
            console.log(e, "create_authentication");
            setError("");
            setUserDetails({
              id: "",
              uname: "",
              email: "",
              phone: ""
              // domain: "",
              // password: "",
              // confirmPassword: ""
            });
          }
        });
      // other things
    }
  };

  return (
    <>
      <div class=" Loginpage">
        <div className="login-form">
          <div class="content ">
            <div class="text">Signup Form</div>
            <form onSubmit={signUpAuth}>
              <div class="field">
                <input
                  type="text"
                  name="uname"
                  value={userDetails.uname}
                  onChange={changeHandler}
                  required
                />
                <span class="fas fa-user"></span>
                <label>User Name</label>
              </div>
              <div class="field">
                <input
                  type="tel"
                  name="phone"
                  value={userDetails.phone}
                  onChange={changeHandler}
                  required
                />
                <span class="fas fa-phone-alt"></span>
                <label>Phone</label>
              </div>

              <div class="field">
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={changeHandler}
                  required
                />
                <span class="fas fa-at"></span>
                <label>Email</label>
              </div>

              {/* <div class="field">
            <input type="text" required />
            <span class="fas fa-lock"></span>
            <label>Domain Name</label>
          </div> */}

              <button type="submit">Sign up</button>
              <div class="sign-up">
                Already a member?
                <Link to="/login">Login now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
