import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Typography from "@mui/material/Typography";
import { useAuthStore } from "../store/store";
import { generateOTP, verifyOTP } from "../helper/helper";
import { useNavigate } from "react-router-dom";

function Recovery() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const { username } = useAuthStore((state) => state.auth);
  const [OTP, setOTP] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    generateOTP(username).then((OTP) => {
      console.log(OTP);
      if (OTP) return toast.success("OTP has been sent to your email!");
      return toast.error("Problem while generating OTP!");
    });
  }, [username]);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      let { status } = await verifyOTP({ username, code: OTP });
      if (status === 201) {
        toast.success("Verify Successfully!");
        return navigate("/reset password");
      }
    } catch (error) {
      return toast.error("Wrong OTP! Check email again!");
    }
  }

  // Handler to resend OTP
  function resendOTP() {
    let sentPromise = generateOTP(username);

    toast.promise(sentPromise, {
      loading: "Sending...",
      success: <b>OTP has been sent to your email!</b>,
      error: <b>Could not send it!</b>,
    });

    sentPromise.then((OTP) => {
      console.log(OTP);
    });
  }

  return (
    <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "10px" }}>
      <DialogTitle style={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          component="div"
          fontWeight="bold"
          color="#1C5555"
          fontSize="28px"
          fontFamily="Inter"
        >
          Recovery
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <span
            style={{
              marginLeft: "150px",
              marginTop: "-10px",
              position: "absolute",
              fontWeight: "bold",
            }}
          >
            Enter OTP to recover password
          </span>
          <br />
          <br />
          <span>Enter 6-digit OTP sent to your email address</span>

          <TextField
            onChange={(e) => setOTP(e.target.value)}
            id="outlined-basic"
            placeholder="OTP number"
            variant="outlined"
            fullWidth
            sx={{
              width: "550px",
              height: "50px",
              marginBottom: "20px",
            }}
          />

          <Link to="/reset password" style={{ textDecoration: "none" }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#1C5555",
                marginBottom: "10px",
                "&:hover": {
                  backgroundColor: "#1C5555",
                },
              }}
            >
              Recover
            </Button>
          </Link>
          <span
            style={{
              marginLeft: "-390px",
              marginTop: "50px",
              position: "absolute",
            }}
          >
            Can't get OTP?{" "}
            <button
              onClick={resendOTP}
              style={{
                background: "none",
                border: "none",
                padding: "0",
                color: "#1C5555",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Resend
            </button>
          </span>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Recovery;
