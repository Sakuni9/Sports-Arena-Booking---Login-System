import React from "react";

import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function RegiCustomerEmail() {
  return (
    <div>
      <div>
        <div
          style={{
            marginTop: "-170px",
            marginBottom: "40px",
            marginLeft: "300px",
          }}
        >
          <img
            src="Group 15.png"
            alt="playground"
            style={{ width: "400px", height: "560px" }}
          />
          <img
            src="Arena Logo .png"
            alt="logo"
            style={{
              width: "90px",
              height: "50px",
              marginTop: "230px",
              marginBottom: "470px",
              marginLeft: "-370px",
            }}
          />
          <img
            src="explore .png"
            alt="ground"
            style={{
              width: "220px",
              height: "200px",
              marginTop: "200px",
              marginBottom: "230px",
              marginLeft: "-20px",
            }}
          />
          <img
            src="pngkey 1.png"
            alt="pngkey"
            style={{
              width: "290px",
              height: "290px",

              marginBottom: "-20px",
              marginLeft: "-230px",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#eeee",
            width: "400px",
            height: "560px",
            marginTop: "-605px",
            marginBottom: "20px",
            marginLeft: "670px",
          }}
        ></div>
        <form>
          <h2
            style={{
              position: "absolute",
              marginTop: "-405px",
              marginBottom: "20px",
              marginLeft: "740px",
              fontFamily: "Inter",
              color: "#1C5555",
            }}
          >
            Check your email inbox
          </h2>

          <Link>
            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 1,
                width: "170px",

                backgroundColor: "#1C5555", // Set the background color
                "&:hover": {
                  backgroundColor: "#1C5555", // Set the hover color
                },
                position: "relative", // Set the position to relative
                top: "-290px", // Modify the top value
                left: "760px", // Modify the left value
              }}
            >
              Resend
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
