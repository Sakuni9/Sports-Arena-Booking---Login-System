import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Recovery() {
  return (
    // Main container
    <div>
      <header
        style={{
          background: "#eeeeee",
          padding: "0 20px 0 20px",
          position: "absolute",
          width: "550px",
          height: "390px",
          left: "344px",
          top: "120px",
          borderRadius: "5px",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            position: "absolute",
            color: "#1C5555",
            top: "5px",
            left: "180px",
            fontSize: "32px",
          }}
        >
          Recovery
        </h2>
        <hr
          style={{
            position: "absolute",
            display: "block",
            marginTop: "85px",
            marginBottom: "0.5em",
            left: 0,
            right: 0,
            backgroundColor: "#eeee",
            padding: "5px",
            borderStyle: "inset",
            borderWidth: "1px",
          }}
        />

        {/* Paragraph explaining what the user needs to do */}
        <div style={{ position: "absolute", top: "120px", left: "60px" }}>
          Enter OTP to recover password <br />
          <br />
          Enter 6 digit OTP sent to your email address
        </div>

        <TextField
          id="outlined-basic"
          placeholder="OTP number"
          variant="outlined"
          sx={{
            width: { sm: 40, md: 300 },
            "&.MuiInputBase-root": {
              height: 35,
            },
            position: "absolute",
            marginTop: "200px",
            marginLeft: "40px",
          }}
        />
        {/* Button to initiate password reset */}
        <div>
          <Link to="/reset password">
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: { sm: 70, md: 150 },
                "&.MuiInputBase-root": {
                  height: 65,
                },
                backgroundColor: "#1C5555", // Set the background color
                "&:hover": {
                  backgroundColor: "#1C5555", // Set the hover color
                },
                position: "absolute", // Set the position to relative
                top: "290px", // Modify the top value
                left: "160px", // Modify the left value
              }}
            >
              Recover
            </Button>
          </Link>
          <span
            style={{
              position: "absolute",
              top: "330px",
            }}
          >
            {" "}
            Can't get OTP? Resend{" "}
          </span>
        </div>
      </header>
    </div>
  );
}
export default Recovery;
