import React, { useState } from "react";
import Modal from "../../UI/Editmodal/Modal";

const Tickettable = (props) => {
  const [open, setOpen] = useState(false);
  const [ticket, setTicket] = useState({
    id: "",
    ticketId: "",
    title: "",
    description: "",
    domain: "",
    package: "",
    priority: 1,
    status: "",
    timestamp: "",
    responses: [],
    images: [],
    ticketer: {
      id: "",
      name: "",
      email: "",
      phone: ""
    }
  });

  const handleOpen = (tic) => {
    setOpen(true);
    setTicket(tic);
  };
  const handleClose = () => setOpen(false);

  let ui = null;
  if (props.tickets === null) {
    ui = <p>Loading!!!</p>;
  } else if (props.tickets.length === 0) {
    ui = <p>No Tickets!!!</p>;
  } else {
    ui = props.tickets.map((tic, i) => (
      <div key={tic.id}>
        <Modal
          open={open}
          handleClose={handleClose}
          ticket={ticket}
          authCtx={props.authCtx}
          response={props.response}
          onChange={props.onChange}
          clear={props.clear}
          save={() => props.save(ticket)}
        />
        <div className="row table-list" onClick={() => handleOpen(tic)}>
          <p>{i + 1}</p>
          <p>{tic.ticketId}</p>
          <p>{tic.title}</p>
          <p>{tic.description}</p>
          <p>{tic.status}</p>
          <p>Reply</p>
        </div>
      </div>
    ));
  }

  return (
    <div class="col-md-12 table-left">
      <div class="row table">
        <p>SI NO</p>
        <p>Ticket Id</p>
        <p>Title</p>
        <p>describe</p>
        <p>Status</p>
        <p>Reply</p>
      </div>
      {ui}
    </div>
  );
};

export default Tickettable;
