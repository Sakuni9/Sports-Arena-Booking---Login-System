import React from "react";
import IconButton from "@mui/material/IconButton";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

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
            Select one of registration types to continue the registration <br />
            procedure.
          </span>
          <IconButton
            aria-label="People"
            style={{
              color: "#1C5555",
              fontSize: "32px",
              width: "60px",
              height: "60px",
              top: "-400px",
              left: "840px",
              borderColor: "#black", // Replace with desired border color
            }}
          >
            <PersonIcon />
          </IconButton>
          <Link href="/customer registration">
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
                top: "-350px", // Modify the top value
                left: "730px", // Modify the left value
              }}
            >
              Customer
            </Button>
          </Link>

          <IconButton
            aria-label="People"
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
              top: "-230px", // Modify the top value
              left: "485px", // Modify the left value
            }}
          >
            Ground Owner
          </Button>
        </form>
      </div>
    </div>
  );
}
