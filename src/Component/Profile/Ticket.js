import React, { useEffect, useState } from "react";
import Ticketcount from "./Ticketcount";
import Ticketfaq from "./Ticketfaq";
import Tickettable from "./Tickettable";
// import Ticketraise from "./Ticketraise";
import {
  addResponse,
  getProductUserTickets,
  raiseTicket
} from "../../Api/AdminDB";
import { IceSkatingTwoTone } from "@mui/icons-material";

const Ticket = (props) => {
  const [tickets, setTickets] = useState(null);
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    priority: "",
    images: []
  });
  const [response, setResponse] = useState("");
  const [open, setOpen] = useState(false); // for raise ticket
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setResponse("");
    setNewTicket(() => {
      return {
        title: "",
        description: "",
        priority: "",
        images: []
      };
    });
  };

  useEffect(() => {
    const user = props.authCtx.user;
    getProductUserTickets(user, (tickets) => {
      setTickets(tickets);
    });
  }, []);

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    // console.log(name, val);
    if (name === "response") {
      setResponse(val);
    } else {
      setNewTicket((prevState) => {
        if (name === "img") {
          let imgs = [];
          for (let i = 0; i < e.target.files.length; i++) {
            const newFile = e.target.files[i];
            // newFile["id"] = Math.random();
            // add an "id" property to each File object
            // setFiles((prevState) => [...prevState, newFile]);
            imgs.push(newFile);
          }
          return {
            ...prevState,
            images: [...imgs]
          };
        } else {
          return {
            ...prevState,
            [name]: val
          };
        }
      });
    }
  };

  const submitTicket = () => {
    raiseTicket(props.authCtx.user, newTicket, (isUpdated) => {
      if (isUpdated) {
        setTickets((prevState) => {
          return [...prevState, newTicket];
        });
        setNewTicket(() => {
          return {
            title: "",
            description: "",
            priority: "",
            images: []
          };
        });
      }
    });
    // console.log("newTicket", newTicket);
  };

  const saveResponse = (response, ticket) => {
    addResponse(props.authCtx.user, response, ticket, (isUpdated) => {
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

  return (
    <>
      <div class="page-content">
        <main class="container-fluid">
          <section class="main-profile">
            <div class="row left">
              <Ticketcount
                tickets={tickets}
                newTicket={newTicket}
                onChangeHandler={onChangeHandler}
                submitTicket={submitTicket}
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
              />
              <Ticketfaq />
            </div>
            <div class="row table-head m-0">
              <Tickettable
                tickets={tickets}
                response={response}
                onChange={onChangeHandler}
                save={(ticket) => saveResponse(response, ticket)}
                clear={() => setResponse("")}
              />
              {/* <Ticketraise /> */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Ticket;
