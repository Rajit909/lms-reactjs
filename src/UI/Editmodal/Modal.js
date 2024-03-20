import * as React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import "./Modal.css";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 700,
  bgcolor: "#fff",
  border: "2px solid #fff",
  p: 2,
  px: 6,
  pb: 3
};

export default function ModalUnstyledDemo(props) {
  const [open, setOpen] = React.useState(false); // for add response
  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open modal
      </button> */}
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={props.open}
        onClose={props.handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h3 style={{ textAlign: "center" }}>Ticket Detail</h3>
          <div className="row md">
            <div className="col-md-6">
              <p>
                <b>Ticket Id</b>&nbsp;:&nbsp;#{props.ticket.ticketId}
              </p>
              <p>
                <b>Package</b>&nbsp;:&nbsp;{props.ticket.package}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <b>Status</b>&nbsp;:&nbsp;{props.ticket.status}
              </p>
              <p>
                <label for="Name">
                  <b>Priority</b>&nbsp;:&nbsp;
                </label>
                <select
                  name="priority"
                  id="cars"
                  className="p-2"
                  value={props.ticket.priority}
                  // onChange=""
                  disabled
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <b>Title</b>&nbsp;:&nbsp;{props.ticket.title}
              </p>
              <label for="Name">
                <b>Desc</b>&nbsp;:&nbsp;
              </label>
              <textarea
                id="Name"
                name="Name"
                rows="2"
                cols="20"
                placeholder="Reply....."
                value={props.ticket.description}
                disabled
              />
            </div>
            <div className="col-md-6">
              <p>
                <b>Domain</b>&nbsp;:&nbsp;{props.ticket.domain}
              </p>
              {open ? (
                <>
                  <textarea
                    id="Name"
                    name="response"
                    className="Name mt-2"
                    rows="2"
                    cols="20"
                    placeholder="Type your response...."
                    value={props.response}
                    onChange={props.onChange}
                  />
                  <div className="mb-2">
                    <Button
                      variant="contained"
                      className="mr-2 save"
                      onClick={props.save}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      className="clear"
                      onClick={props.clear}
                    >
                      Clear
                    </Button>
                    <Button
                      variant="contained"
                      className="clear"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <Button
                  variant="contained"
                  className="mb-2"
                  onClick={() => setOpen(true)}
                >
                  Add Responce
                </Button>
              )}
            </div>
          </div>
          <div className="footer">
            <h4 className="mt-2">
              <b>Responses</b>&nbsp;:&nbsp;
            </h4>
            <div className="footer-inner">
              {/* <p>
                {props.authCtx.user.name} <span>Date(--/--/----)</span>
                &nbsp;:&nbsp; This error
              </p> */}
              <p>
                {props.ticket.ticketer.name},{" "}
                <span>
                  ({new Date(parseInt(props.ticket.timestamp)).toLocaleString()}
                  )
                </span>
                &nbsp;:&nbsp; {props.ticket.title} - {props.ticket.description}
              </p>
              {props.ticket.responses.map((res) => (
                <p>
                  {res.from},{" "}
                  <span>
                    ({new Date(parseInt(res.timestamp)).toLocaleString()})
                  </span>
                  &nbsp;:&nbsp; {res.message}
                </p>
              ))}
            </div>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
}
