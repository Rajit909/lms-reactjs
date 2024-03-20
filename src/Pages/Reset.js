import React from "react";

const Reset = () => {
  return (
    <>
      <div class=" Loginpage">
        <div className="login-form">
          <div class="content">
            <div class="text">Set Password</div>
            <form action="/index.html">
              <div class="field">
                <input type="text" required />
                <span class="fas fa-key"></span>
                <label>New Password</label>
              </div>
              <div class="field">
                <input type="text" required />
                <span class="fas fa-lock"></span>
                <label>confirm Password</label>
              </div>

              <button>Reset</button>
              {/* <!-- <div class="sign-up">
          Not a member?
          <a href="/signup.html">signup now</a>
        </div> --> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reset;
