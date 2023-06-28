import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function RegistrationPage() {
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
              width: "80px",
              height: "50px",
              marginTop: "230px",
              marginBottom: "470px",
              marginLeft: "-370px",
            }}
          />
          <img
            src="ground.png"
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
            src="pngkey 1.png"
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
            width: "450px",
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
              marginTop: "-545px",
              marginBottom: "20px",
              marginLeft: "700px",
              fontFamily: "Inter",
            }}
          >
            Registration Form
          </h2>
          <span
            style={{
              position: "absolute",
              top: "120px",
              marginBottom: "-20px",
              marginLeft: "700px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          >
            Personal Details
          </span>
          <div>
            <TextField
              margin="normal"
              required
              id="fname"
              label="First Name"
              name="fname"
              type="text"
              sx={{
                width: { sm: 100, md: 170 },
                "& .MuiInputBase-root": {
                  height: 45,
                },
              }}
              style={{
                position: "absolute",
                top: "140px",
                marginBottom: "-20px",
                marginLeft: "700px",
                fontFamily: "Inter",
                fontSize: "14px",
              }}
            />

            <TextField
              margin="normal"
              required
              name="lname"
              label="Last Name"
              type="text"
              id="lname"
              sx={{
                width: { sm: 100, md: 170 },
                "& .MuiInputBase-root": {
                  height: 45,
                },
              }}
              style={{
                position: "absolute",
                top: "140px",
                marginBottom: "-20px",
                marginLeft: "910px",
                fontFamily: "Inter",
                fontSize: "14px",
              }}
            />
          </div>
          <div>
            <TextField
              className="email2"
              margin="normal"
              required
              sx={{
                width: { sm: 100, md: 380 },
                "& .MuiInputBase-root": {
                  height: 45,
                },
              }}
              style={{
                position: "absolute",
                top: "210px",
                marginBottom: "-20px",
                marginLeft: "700px",
                fontFamily: "Inter",
                fontSize: "14px",
              }}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </div>
          <div>
            <TextField
              margin="normal"
              required
              id="mobile"
              label="Mobile Number"
              name="mobile"
              type="text"
              sx={{
                width: { sm: 100, md: 170 },
                "& .MuiInputBase-root": {
                  height: 45,
                },
              }}
              style={{
                position: "absolute",
                top: "280px",
                marginBottom: "-20px",
                marginLeft: "700px",
                fontFamily: "Inter",
                fontSize: "14px",
              }}
            />

            <TextField
              margin="normal"
              required
              name="tele"
              label="Telephone"
              type="text"
              id="tele"
              sx={{
                width: { sm: 100, md: 170 },
                "& .MuiInputBase-root": {
                  height: 45,
                },
              }}
              style={{
                position: "absolute",
                top: "280px",
                marginBottom: "-20px",
                marginLeft: "910px",
                fontFamily: "Inter",
                fontSize: "14px",
              }}
            />
            <div className="drop1">
              <FormControl
                sx={{
                  width: { sm: 100, md: 170 },
                  "& .MuiInputBase-root": {
                    height: 45,
                  },
                }}
                style={{
                  position: "absolute",
                  top: "370px",
                  marginBottom: "-20px",
                  marginLeft: "700px",
                  fontFamily: "Inter",
                  fontSize: "14px",
                }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Province
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  label="Province"
                >
                  <MenuItem value={1}>Southern Province</MenuItem>
                  <MenuItem value={2}>Uva Province </MenuItem>
                  <MenuItem value={3}>Western Province</MenuItem>
                  <MenuItem value={4}>Central Province</MenuItem>
                  <MenuItem value={5}>North Central Province </MenuItem>
                  <MenuItem value={6}>Eastern Province</MenuItem>
                  <MenuItem value={7}>North Western Province</MenuItem>
                  <MenuItem value={8}>Sabaragamuwa Province</MenuItem>
                  <MenuItem value={9}>Western Province</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className="text5"
                margin="normal"
                required
                sx={{
                  width: { sm: 70, md: 170 },
                  "& .MuiInputBase-root": {
                    height: 45,
                  },
                }}
                id="zip"
                label="Zip Code"
                name="zip"
                autoComplete="zip"
                autoFocus
                style={{
                  position: "absolute",
                  top: "350px",
                  marginBottom: "-20px",
                  marginLeft: "910px",
                  fontFamily: "Inter",
                  fontSize: "14px",
                }}
              />
              <TextField
                className="address"
                margin="normal"
                required
                sx={{
                  width: { sm: 140, md: 380 },
                  "& .MuiInputBase-root": {
                    height: 65,
                  },
                }}
                style={{
                  position: "absolute",
                  top: "420px",
                  marginBottom: "-20px",
                  marginLeft: "700px",
                  fontFamily: "Inter",
                  fontSize: "14px",
                }}
                id="add"
                label="Address"
                name="add"
                autoComplete="add"
                autoFocus
              />
              <Button
                type="submit"
                variant="contained"
                className="btn"
                sx={{
                  width: { sm: 70, md: 380 },
                  "&.MuiInputBase-root": {
                    height: 45,
                  },
                  backgroundColor: "#1C5555", // Set the background color
                  "&:hover": {
                    backgroundColor: "#1C5555", // Set the hover color
                  },
                }}
                style={{
                  position: "absolute",
                  top: "530px",
                  marginBottom: "-20px",
                  marginLeft: "700px",
                  fontFamily: "Inter",
                  fontSize: "14px",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
