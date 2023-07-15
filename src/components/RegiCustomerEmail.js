import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function RegiCustomerEmail() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <header>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
              color: "#1C5555",
              fontWeight: "bold",
              marginLeft: "20px", // Adjust the left margin to change the position
            }}
          >
            <CheckCircleIcon
              style={{
                width: "40px",
                height: "30px",
                color: "#1C5555",
              }}
            />
            <span>Check your email box</span>
          </DialogTitle>
          <Button
            type="submit"
            variant="contained"
            className="btn"
            onClick={handleClose}
            sx={{
              width: { sm: 70, md: 150 },
              "&.MuiInputBase-root": {
                height: 65,
              },
              backgroundColor: "#1C5555",
              "&:hover": {
                backgroundColor: "#1C5555",
              },
              margin: "20px auto",
              display: "block",
            }}
          >
            RESEND
          </Button>
        </Dialog>
      </header>
    </div>
  );
}

export default RegiCustomerEmail;
