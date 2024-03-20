import React from "react";
import Raisemodal from "../../UI/Raisemodal/Raisemodal";

const Ticketcount = (props) => {
  return (
    <div class="col-md-4">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <h5>
              <b>40</b>
            </h5>
            <p>All Ticket</p>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <h5>
              <b>28</b>
            </h5>
            <p>Raised</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card">
            <h5>
              <b>28</b>
            </h5>
            <p>processing</p>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <h5>
              <b>14</b>
            </h5>
            <p>Completed</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start">
        <Raisemodal
          newTicket={props.newTicket}
          onChange={props.onChangeHandler}
          submitTicket={props.submitTicket}
          open={props.open}
          handleOpen={props.handleOpen}
          handleClose={props.handleClose}
        />
      </div>
    </div>
  );
};

export default Ticketcount;
