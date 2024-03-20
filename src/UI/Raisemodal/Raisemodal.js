import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Ticketraise from "../../Component/Profile/Ticketraise";
// import "./Raisemodal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: 2,
  boxShadow: 24,
  p: 4
};

export default function BasicModal(props) {
  return (
    <div>
      <Button variant="contained" onClick={props.handleOpen}>
        Raise Ticket
      </Button>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Ticketraise
            newTicket={props.newTicket}
            onChangeHandler={props.onChange}
            submitTicket={props.submitTicket}
          />
        </Box>
      </Modal>
    </div>
  );
}
