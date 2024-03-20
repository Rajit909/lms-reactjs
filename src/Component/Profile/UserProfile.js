import { useEffect, useState } from "react";
import { updateProductUser } from "../../Api/AdminDB";

const UserProfile = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // console.log("props.authCtx.user", props.authCtx.user);
    if (props.authCtx.user !== null) {
      setUser(props.authCtx.user);
    }
  }, [props.authCtx.user]);

  const onChangeHandler = (e) => {
    setUser((prevState) => {
      return {
        ...user,
        [e.target.name]: e.target.value
      };
    });
  };

  const submitHandler = () => {
    console.log("user", user);
    const authUser = props.authCtx.user;
    if (
      user.name === authUser.name &&
      user.email === authUser.email &&
      user.phone === authUser.phone &&
      user.domain === authUser.domain
    ) {
      alert("Nothing to update!!!");
    } else {
      updateProductUser(user, (isUpdated) => {
        if (isUpdated) {
          props.authCtx.setUser(user);
        } else {
          alert("Error!!!");
        }
      });
    }
  };

  let ui = null;
  if (user === null) {
    ui = <p>Loading!!!</p>;
  } else {
    ui = (
      <section class="main-profile">
        <div class="profile row">
          <div class="col-md-5">
            <label for="fileToUpload">
              <input
                type="file"
                id="fileToUpload"
                style={{ visibility: "hidden" }}
                accept=".png,.jpg,jpeg,.PNG,.JPEG"
                name="fileToUpload"
                onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"
              />
            </label>
            <div class="img">
              <img
                // src="/images/avatar.png"
                src={user.photoUrl}
                alt="profile"
                class="img-fluid"
                id="blah"
              />
              <i class="fa fa-camera"></i>
            </div>
            {/* <!-- s --> */}
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
          <div class="col-md-7">
            <form>
              <div class="row name">
                <div class="col-lg-6">
                  <label for="fname">Name:</label>
                  <br />
                  <i
                    class="fa fa-edit"
                    id="edit1"
                    onclick="document.getElementById('fname').style.pointerEvents='auto';document.getElementById('fname').focus();this.style.display='none'; document.getElementById('check1').style.display='inline-block';"
                  ></i>
                  <i
                    class="fa fa-check"
                    style={{ display: "none" }}
                    id="check1"
                    onclick="document.getElementById('edit1').style.display='inline-block';this.style.display='none';document.getElementById('fname').style.pointerEvents='none';"
                  ></i>
                  <input
                    type="text"
                    id="fname"
                    name="name"
                    placeholder={props.authCtx.user.name}
                    value={user.name}
                    onChange={onChangeHandler}
                  />
                </div>
                <div class="col-lg-6">
                  <label for="email">Email:</label>
                  <i
                    class="fa fa-edit"
                    id="edit2"
                    onclick="document.getElementById('email').style.pointerEvents='auto';document.getElementById('email').focus();this.style.display='none'; document.getElementById('check2').style.display='inline-block';"
                  ></i>
                  <i
                    class="fa fa-check"
                    style={{ display: "none" }}
                    id="check2"
                    onclick="document.getElementById('edit2').style.display='inline-block';this.style.display='none';document.getElementById('email').style.pointerEvents='none';"
                  ></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={props.authCtx.user.email}
                    value={user.email}
                    onChange={onChangeHandler}
                    disabled
                  />
                  <br />
                </div>
              </div>
              <div class="row phone">
                <div class="col-lg-6">
                  <label for="pnumber">Phone:</label>
                  <i
                    class="fa fa-edit"
                    id="edit3"
                    onclick="document.getElementById('pnumber').style.pointerEvents='auto';document.getElementById('pnumber').focus();this.style.display='none'; document.getElementById('check3').style.display='inline-block';"
                  ></i>
                  <i
                    class="fa fa-check"
                    style={{ display: "none" }}
                    id="check3"
                    onclick="document.getElementById('edit3').style.display='inline-block';this.style.display='none';document.getElementById('dname').style.pointerEvents='none';"
                  ></i>
                  <input
                    type="tel"
                    id="pnumber"
                    name="phone"
                    placeholder={props.authCtx.user.phone}
                    value={user.phone}
                    onChange={onChangeHandler}
                  />
                  <br />
                </div>
                <div class="col-lg-6">
                  <label for="dname">Domain:</label>
                  <i
                    class="fa fa-edit"
                    id="edit4"
                    onclick="document.getElementById('dname').style.pointerEvents='auto';document.getElementById('dname').focus();this.style.display='none'; document.getElementById('check4').style.display='inline-block';"
                  ></i>
                  <i
                    class="fa fa-check"
                    style={{ display: "none" }}
                    id="check4"
                    onclick="document.getElementById('edit4').style.display='inline-block';this.style.display='none';document.getElementById('dname').style.pointerEvents='none';"
                  ></i>
                  <input
                    type="text"
                    id="dname"
                    name="domain"
                    placeholder={props.authCtx.user.domain}
                    value={user.domain}
                    onChange={onChangeHandler}
                  />
                  <br />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitHandler}
              >
                Update
              </button>
            </form>
          </div>
        </div>
        <div class="track">
          <div class="row">
            <div class="col-sm-4">
              <div class="inner-div style1">
                <div>
                  <div class="text1">
                    {user.package.status === "ongoing" ? "On Going" : "Expired"}
                  </div>
                  <div class="text2">Basic</div>
                </div>
                <div class="count">
                  {Math.round(
                    Math.abs(
                      (new Date(parseInt(user.package.purchaseDate)) -
                        new Date(parseInt(user.package.dueDate))) /
                        (24 * 60 * 60 * 1000)
                    )
                  )}
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="inner-div style2">
                <div>
                  <div class="text1">Date</div>
                  <div class="text2">
                    {new Date(
                      parseInt(user.package.purchaseDate)
                    ).toDateString()}
                    {/* 11/12/2021 */}
                  </div>
                </div>
                {/* <!-- <div class="count">599</div> --> */}
              </div>
            </div>
            <div class="col-sm-4">
              <div class="inner-div style3">
                <div>
                  <div class="text1">Due Date</div>
                  <div class="text2">
                    {new Date(parseInt(user.package.dueDate)).toDateString()}
                  </div>
                </div>
                {/* <!-- <div class="count">781</div> --> */}
              </div>
            </div>
            {/* <!-- <div class="col-sm-3">
      <div class="inner-div style4">
        <div>
          <div class="text1">Lorem Ipsum</div>
          <div class="text2">It is a dummy</div>
        </div>
        <div class="count">781</div>
      </div>
    </div> --> */}
          </div>
          <div class="row Packages">
            <div class="col-md-4">
              <div class="card">
                <img
                  src="images/electronic-device.png"
                  class="icon"
                  alt="electronic-device"
                />
                <h4>
                  <b>Basic</b>
                </h4>
                <p>2999&ensp;/&ensp;Month</p>
                <div class="row">
                  <a class="buy" href="#2">
                    <i class="fas fa-shopping-cart"></i>Buy Now
                  </a>
                  <a class="read" href="#3">
                    <i class="fab fa-readme"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="images/settings.png" class="icon" alt="settings" />
                <h4>
                  <b>Secondary</b>
                </h4>
                <p>3999&ensp;/&ensp;Month</p>
                <div class="row">
                  <a class="buy" href="#1">
                    <i class="fas fa-shopping-cart"></i>Buy Now
                  </a>
                  <a class="read" href="#2">
                    <i class="fab fa-readme"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  src="images/storage-device.png"
                  class="icon"
                  alt="storage-device"
                />
                <h4>
                  <b>Permium</b>
                </h4>
                <p>4999&ensp;/&ensp;Year</p>
                <div class="row">
                  <a class="buy" href="#2">
                    <i class="fas fa-shopping-cart"></i>Buy Now
                  </a>
                  <a class="read" href="#3">
                    <i class="fab fa-readme"></i>Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <div class="page-content">
      <main class="container-fluid">{ui}</main>
      {/* <!-- END .container-fluid --> */}
    </div>
  );
};

export default UserProfile;
