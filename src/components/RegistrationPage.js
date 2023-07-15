import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import avatar from "../assets/profile.png";
import pngkey from "../assets/pngkey 1.png";
import logo from "../assets/Arena Logo .png";
import playground from "../assets/Group 15.png";
import ground from "../assets/ground.png";
import { registerValidation } from "../helper/validate";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import convertToBase64 from "../helper/convert";
import { registerUser } from "../helper/helper";
import { Link, useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [showPassword, setShowPassword] = useState(false); // Define the state variable for password visibility

  const handleClickShowPassword = () => {
    // Define the event handler for toggling password visibility
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    // Define the event handler for mouse down on password input
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      email: "ygsathsarani@gmail.com",
      username: "example123",
      password: "admin@123",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: "Creating...",
        success: <b>Regist Successfully...!</b>,
        error: <b>Could not Register</b>,
      });

      registerPromise.then(function () {
        navigate("/");
      });
    },
  });
  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
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
        <form onSubmit={formik.handleSubmit}>
          <h2
            style={{
              position: "absolute",
              marginTop: "-535px",
              marginBottom: "20px",
              marginLeft: "770px",
              fontFamily: "Inter",
            }}
          >
            Registration Form
          </h2>
          <span
            style={{
              position: "absolute",
              top: "130px",
              marginBottom: "-20px",
              marginLeft: "790px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          >
            Thanks for choosing us!
          </span>
          <div>
            <label htmlFor="profile">
              <img
                src={file || avatar}
                alt="avatar"
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  marginTop: "-450px",
                  marginLeft: "820px",
                  borderRadius: "50%",
                  border: "4px solid white",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
                }}
              />
            </label>

            <input
              onChange={onUpload}
              type="file"
              id="profile"
              name="profile"
              style={{
                position: "absolute",
                marginTop: "-400px",
                marginLeft: "830px",
                display: "none",
              }}
            />
          </div>

          <div>
            <TextField
              {...formik.getFieldProps("username")}
              margin="normal"
              required
              id="uname"
              placeholder="Enter your username"
              name="uname"
              type="text"
              sx={{
                width: { sm: 100, md: 300 },
                "& .MuiInputBase-root": {
                  height: 45,
                },
              }}
              style={{
                position: "absolute",
                top: "290px",
                marginBottom: "-20px",
                marginLeft: "725px",
                fontFamily: "Inter",
                fontSize: "14px",
              }}
            />
          </div>
          <div>
            <TextField
              {...formik.getFieldProps("email")}
              className="email2"
              margin="normal"
              required
              sx={{
                width: { sm: 100, md: 300 },
                "& .MuiInputBase-root": {
                  height: 45,
                },
              }}
              style={{
                position: "absolute",
                top: "350px",
                marginBottom: "-20px",
                marginLeft: "725px",
                fontFamily: "Inter",
                fontSize: "14px",
              }}
              id="email"
              placeholder="Enter your email address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </div>
          <FormControl
            {...formik.getFieldProps("password")}
            sx={{
              width: { sm: 100, md: 300 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            variant="outlined"
            style={{
              position: "absolute",
              marginTop: "-200px",
              marginBottom: "20px",
              marginLeft: "725px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          >
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
              placeholder="Enter your password"
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            className="btn"
            sx={{
              width: { sm: 70, md: 300 },
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
              top: "500px",
              marginBottom: "-20px",
              marginLeft: "725px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          >
            Register
          </Button>
          <span
            style={{
              position: "absolute",
              top: "540px",
              marginLeft: "750px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          >
            Already have an accont ?{" "}
            <Link to="/" variant="body2">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
