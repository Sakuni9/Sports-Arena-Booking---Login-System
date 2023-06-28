import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControl, OutlinedInput } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { resetPasswordValidation } from "./validate";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    // Main container
    <div className="App">
      <header
        className="App-header"
        style={{
          position: "absolute",
          width: "590px",
          height: "390px",
          left: "294px",
          top: "120px",
          background: "#eeeeee",
          padding: "0 25px 0 20px",
        }}
      >
        {/* Heading */}
        <h2
          className="head1"
          style={{
            color: "#1C5555",
            marginTop: "40px",
            marginLeft: "150px",
            fontSize: "30px",
          }}
        >
          Reset Password
        </h2>
        <hr
          style={{
            position: "absolute",
            display: "block",
            marginTop: "-5px",
            marginBottom: "0.5em",
            left: 0,
            right: 0,
            backgroundColor: "#eeee",
            padding: "5px",
            borderStyle: "inset",
            borderWidth: "1px",
          }}
        />

        <FormControl
          sx={{ m: 1, width: "300px" }}
          {...formik.getFieldProps("password")}
          variant="outlined"
          className="password"
          style={{
            marginTop: "30px",
            marginLeft: "100px",
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            New Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  style={{
                    top: "0px",
                  }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="New Password"
          />
        </FormControl>

        <FormControl
          sx={{ m: 1, width: "300px" }}
          {...formik.getFieldProps("confirm_pwd")}
          variant="outlined"
          className="password"
          style={{
            marginTop: "30px",
            marginLeft: "100px",
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Repeat Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  style={{
                    top: "0px",
                  }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Repeat Password"
          />
        </FormControl>

        <div>
          <Link to="/">
            <Button
              type="submit"
              variant="contained"
              className="btn"
              sx={{
                width: { sm: 70, md: 150 },
                "&.MuiInputBase-root": {
                  height: 65,
                },
                backgroundColor: "#1C5555", // Set the background color
                "&:hover": {
                  backgroundColor: "#1C5555", // Set the hover color
                },
                position: "relative", // Set the position to relative
                top: "40px", // Modify the top value
                left: "100px", // Modify the left value
              }}
            >
              Reset
            </Button>
          </Link>

          <Button
            type="submit"
            variant="contained"
            className="btn"
            sx={{
              width: { sm: 70, md: 150 },
              "&.MuiInputBase-root": {
                height: 65,
              },
              backgroundColor: "#1C5555", // Set the background color
              "&:hover": {
                backgroundColor: "#1C5555", // Set the hover color
              },
              position: "relative", // Set the position to relative
              top: "40px", // Modify the top value
              left: "150px", // Modify the left value
            }}
          >
            Cancel
          </Button>
        </div>
      </header>
    </div>
  );
}

export default ResetPassword;
