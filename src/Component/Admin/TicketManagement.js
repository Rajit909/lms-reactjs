import $ from "jquery";
import { useEffect, useState } from "react";
import { addResponse } from "../../Api/AdminDB";
import { getAllTickets } from "../../Api/SuperDB";
import Modal from "../../UI/Editmodal/Modal";

const TicketManagement = (props) => {
  const [tickets, setTickets] = useState(null);
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
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState("");
  const handleOpen = (tic) => {
    setTicket(tic);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setResponse("");
  };

  useEffect(() => {
    getAllTickets((tickets) => {
      setTickets(tickets);
    });
  }, []);

  $("#close-sidebar").click(function () {
    $(".htmlBody").removeClass("toggled");
  });
  $("#show-sidebar").click(function () {
    $(".htmlBody").addClass("toggled");
  });
  $("#collapsible").click(function () {
    $(".content").toggle();
  });

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("model");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  // const responseHandler = () => {
  //   modal.style.display = "block";
  // };

  // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    // console.log(name, val);
    if (name === "response") {
      setResponse(val);
    }
  };

  const saveResponse = (response, ticket) => {
    let user = {
      name: "SuperAdmin"
    };
    // console.log("ticket", ticket);
    addResponse(user, response, ticket, (isUpdated) => {
      if (isUpdated) {
        setTickets((prevState) => {
          let index = prevState.findIndex((tics) => {
            return tics.id === ticket.id;
          });
          let data = prevState[index];
          data.responses.push(isUpdated);
          prevState[index] = data;
          alert("Successfully Added!!!");
          return prevState;
        });
        setResponse("");
      } else {
        alert("Not updated!!!");
      }
    });
  };

  let ui = null;
  if (tickets === null) {
    ui = <p>Loading!!!</p>;
  } else if (tickets.length === 0) {
    ui = <p>No Tickets!!!</p>;
  } else {
    ui = tickets.map((tic, i) => {
      return (
        <div class="table-list" key={tic.id}>
          <div class="row" onClick={() => handleOpen(tic)}>
            <p>{i + 1}</p>
            <p>{tic.title}</p>
            <p>{tic.domain}</p>
            <p>{tic.package}</p>
            <p>
              <span>
                {tic.status === "sent" ? <b>Pending</b> : <b>{tic.status}</b>}
              </span>
            </p>
          </div>
          <div class="row m-0 res">
            {/* <h6>
              adalah contoh teks atau dummy dalam industri percetakan dan
              penataan huruf atau typesetting
              <span class="rep" id="model">
                <b>Respond</b>
              </span>
            </h6> */}
            <div id="myModal" class="modal">
              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <h4>Ticket Respond</h4>
                <span class="close">&times;</span>
                <input type="text" class="title" />
                <textarea
                  class="describe"
                  placeholder="Describe....."
                ></textarea>
                <button type="submit" class="sub">
                  Response
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div class="track">
        <div class="row ">
          <div class="col-sm-4">
            <div class="inner-div style1">
              <div>
                <div class="text1">Lorem Ipsum</div>
                <div class="text2">It is a dummy</div>
              </div>
              <div class="count">781</div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="inner-div style2">
              <div>
                <div class="text1">Lorem Ipsum</div>
                <div class="text2">It is a dummy</div>
              </div>
              <div class="count">781</div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="inner-div style3">
              <div>
                <div class="text1">Lorem Ipsum</div>
                <div class="text2">It is a dummy</div>
              </div>
              <div class="count">781</div>
            </div>
          </div>
        </div>

        <div class="row table-head m-0">
          <div class="col-md-12 table-left">
            <div class="row table">
              <p>No</p>
              <p>Title</p>
              <p>Domain Name</p>
              <p>Package Name</p>
              <p>Status</p>
            </div>
            <Modal
              open={open}
              handleClose={handleClose}
              ticket={ticket}
              authCtx={props.authCtx}
              response={response}
              onChange={onChangeHandler}
              save={() => saveResponse(response, ticket)}
              clear={() => setResponse("")}
            />
            {ui}
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketManagement;
