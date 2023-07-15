import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

function AccountSetting() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleResend = () => {
    // Logic for resending the email
    setOpen(true);
  };

  return (
    <div className="App">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <CheckCircleIcon
            style={{
              width: "60px",
              height: "39px",
              color: "#1C5555",
            }}
          />
        </DialogTitle>
        <DialogContent>
          <h3
            style={{
              color: "#1C5555",
              fontWeight: "bold",
              fontSize: "26px",
              fontFamily: "Inter",
            }}
          >
            Check your email box
          </h3>
          <Button
            type="submit"
            variant="contained"
            className="btn"
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
            onClick={handleResend}
          >
            RESEND
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AccountSetting;
