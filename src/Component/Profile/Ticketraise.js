import React from "react";
import $ from "jquery";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// import "../../UI/Raisemodal/Raisemodal.css";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ImageIcon from "@mui/icons-material/Image";
// import SendIcon from "@mui/icons-material/Send";
import IosShareIcon from "@mui/icons-material/IosShare";
// import Button from '@mui/material/Button';
// import IconButton from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import Stack from "@mui/material/Stack";

const Ticketraise = (props) => {
  const Input = styled("input")({
    display: "none"
  });
  $("#show-sidebar").click(function () {
    $("#sidebarWrapper").toggle();
  });
  return (
    <div class="col-md-12">
      <div className="row">
        <div className="col-md-6">
          <h3>Ticket</h3>
        </div>
        <div className="col-md-6 d-flex justify-content-end mb-2">
          <p>
            <label for="Name">
              <b>Priority</b>&nbsp;:&nbsp;
            </label>
            <select
              name="priority"
              // id="cars"
              className="p-2"
              style={{ border: "1px solid #999" }}
              value={props.newTicket.priority}
              onChange={props.onChangeHandler}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <input
            type="text"
            placeholder="Title....."
            class="title w-100 p-2"
            name="title"
            style={{
              outline: 0,
              border: "1px solid #999",
              borderRadius: "5px",
              background: "#ccc"
            }}
            value={props.newTicket.title}
            onChange={props.onChangeHandler}
          />
        </div>
        {/* <div class="col-4"></div> */}
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <textarea
            class="describe w-100 p-2"
            placeholder="Raise your ticket....."
            rows="4"
            cols="40"
            name="description"
            style={{
              outline: 0,
              border: "1px solid #999",
              borderRadius: "5px",
              background: "#ccc"
            }}
            value={props.newTicket.description}
            onChange={props.onChangeHandler}
          />
        </div>
        {/* <div class="col-4"></div> */}
      </div>
      <div className="row mt-4 d-flex justify-content-end">
        <label htmlFor="contained-button-file" className="m-0">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            className="w-100"
            name="img"
            // value={props.newTicket.image}
            onChange={props.onChangeHandler}
          />
          <Button variant="contained" component="span" className="mr-4">
            <ImageIcon className="d-flex justify-content-center align-item-center mr-2" />
            Upload
          </Button>
        </label>
        <Button
          variant="contained"
          color="success"
          onClick={props.submitTicket}
        >
          <IosShareIcon className="d-flex justify-content-center align-item-center mr-2" />
          Raise Ticket
        </Button>
      </div>
    </div>
  );
};

export default Ticketraise;
