import React, { useState } from "react";
import "../App.css";
export default function CommentsForm() {
  let [formData, setFormData] = useState({
    userName: "",
    rating: 5,
    remarks: ""
  });

  let handleInputeChange = (event) => {
    setFormData((currData) => {
        return {
            ...currData,
            [event.target.name]: event.target.value
        }
    })
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
        userName: "",
        rating: "",
        remarks: ""
    })
  }

  return (
    <>
      <div className="CommentForm">
        <div>
          <h3>Give a Comment !</h3>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="userName">Username</label> &nbsp;
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={handleInputeChange}
              placeholder="Username"
              value={formData.userName}
            />
            &nbsp; &nbsp;
            <br />
            <textarea 
            name="remarks" 
            id="remarks" 
            cols="30" 
            onChange={handleInputeChange}
            placeholder="Remarks"
            rows="5"
            value={formData.remarks}
            ></textarea>
            <br />
            <br />
            <label htmlFor="rating">Rating</label> &nbsp;
            <input 
            type="number" 
            name="rating" 
            id="rating" 
            onChange={handleInputeChange}
            value={formData.rating}
            max={5}
            min={1} />
            <br />
            <br />
            <button>Add Comments</button>
          </form>
        </div>
      </div>
    </>
  );
}
