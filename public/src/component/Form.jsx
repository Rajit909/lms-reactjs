import React, { useState } from "react";
import "../App.css";


function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    passWord: ""
  });

  let handleInputeChange = (event) => {
    // let fieldName = event.target.name;
    // let newVal = event.target.value
    setFormData((currData)=>{
      return {
        ...currData, 
        [event.target.name]: event.target.value};
    })
  }
  
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      passWord: ""
    })
  }
  
  return (
    <>
      <div className="form">
        <form action="" onSubmit={handleFormSubmit}>
          <label htmlFor="fullName">Fullname</label><br />
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleInputeChange}
            id="fullName"
            name="fullName"
          />
          <br />
          <label htmlFor="username">Username</label><br />
          <input
            type="text"
            placeholder="Enter your Username"
            value={formData.userName}
            onChange={handleInputeChange}
            id="userName"
            name="userName"
          />
          <br />
          <label htmlFor="password">Password</label><br />
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.passWord}
            onChange={handleInputeChange}
            id="passWord"
            name="passWord"
          />
<br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
