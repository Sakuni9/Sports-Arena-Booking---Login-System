import React from "react";
import IconButton from "@mui/material/IconButton";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import pngkey from "../assets/pngkey 1.png";
import logo from "../assets/Arena Logo .png";
import playground from "../assets/Group 15.png";
import ground from "../assets/ground.png";

export default function RegistrationType() {
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
              marginTop: "-505px",
              marginBottom: "20px",
              marginLeft: "780px",
              fontFamily: "Inter",
              color: "#1C5555",
            }}
          >
            Registration Type
          </h2>
          <span
            style={{
              position: "absolute",
              top: "180px",
              marginBottom: "-20px",
              marginLeft: "700px",
              fontFamily: "Inter",
              fontSize: "13px",
            }}
          >
            Select one of the registration types to continue the registration
            procedure.
          </span>
          <IconButton
            aria-label="Person"
            style={{
              color: "#1C5555",
              fontSize: "32px",
              width: "60px",
              height: "60px",
              top: "-400px",
              left: "840px",
              borderColor: "black", // Replace with desired border color
            }}
          >
            <PersonIcon />
          </IconButton>
          <Link
            href="/customer registration"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                m: 1,
                width: "170px",
                backgroundColor: "#1C5555",
                "&:hover": {
                  backgroundColor: "#1C5555",
                },
                position: "relative",
                top: "-350px",
                left: "730px",
              }}
            >
              <span style={{ color: "white" }}>Customer</span>
            </Button>
          </Link>

          <IconButton
            aria-label="PeopleAlt"
            style={{
              color: "#1C5555",
              fontSize: "24px",
              width: "60px",
              height: "60px",
              top: "-275px",
              left: "600px",
              right: "140px",
            }}
          >
            <PeopleAltIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              m: 1,
              width: "170px",
              backgroundColor: "#1C5555",
              "&:hover": {
                backgroundColor: "#1C5555",
              },
              position: "relative",
              top: "-230px",
              left: "485px",
            }}
          >
            <span style={{ color: "white" }}>Ground Owner</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
