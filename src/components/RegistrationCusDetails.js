import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import pngkey from "../assets/pngkey 1.png";
import logo from "../assets/Arena Logo .png";
import playground from "../assets/Group 15.png";
import ground from "../assets/ground.png";

export default function RegistrationCusDetails() {
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
            src={playground}
            alt="playground"
            style={{ width: "400px", height: "560px" }}
          />
          <img
            src={logo}
            alt="logo"
            style={{
              width: "80px",
              height: "50px",
              marginTop: "230px",
              marginBottom: "470px",
              marginLeft: "-370px",
            }}
          />
          <img
            src={ground}
            alt="ground"
            style={{
              width: "220px",
              height: "120px",
              marginTop: "230px",
              marginBottom: "310px",
              marginLeft: "-20px",
            }}
          />
          <img
            src={pngkey}
            alt="pngkey"
            style={{
              width: "290px",
              height: "290px",

              marginBottom: "-20px",
              marginLeft: "-190px",
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
              marginTop: "-525px",
              marginBottom: "20px",
              marginLeft: "700px",
              fontFamily: "Inter",
              color: "#1C5555",
              fontSize: "24px",
            }}
          >
            Contact Details
          </h2>
          <span
            style={{
              position: "absolute",
              top: "170px",
              marginBottom: "-20px",
              marginLeft: "700px",
              fontFamily: "Inter",
              fontSize: "13px",
            }}
          >
            Hello there, kindly give us your personal contact details <br />
            and we’ll send you a link to a register as an our customer.
          </span>
          <TextField
            sx={{
              width: { sm: 100, md: 290 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Enter your email address"
            name="email"
            autoComplete="email"
            autoFocus
            style={{
              marginTop: "-380px",
              marginBottom: "20px",
              marginLeft: "700px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />
          <TextField
            sx={{
              width: { sm: 100, md: 290 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            margin="normal"
            required
            fullWidth
            id="number"
            placeholder="Enter your contact number"
            name="number"
            autoComplete="number"
            autoFocus
            style={{
              marginTop: "-320px",
              marginBottom: "20px",
              marginLeft: "700px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />

          <Link href="/registation email">
            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 1,
                width: "170px",

                backgroundColor: "#1C5555",
                "&:hover": {
                  backgroundColor: "#1C5555",
                },
                position: "relative",
                top: "-200px",
                left: "-220px",
              }}
            >
              Submit
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
