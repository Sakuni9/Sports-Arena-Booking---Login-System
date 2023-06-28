import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "./validate";

const LoginPage = () => {
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
      password: "admin@123",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
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
            marginTop: "-505px",
            marginBottom: "20px",
            marginLeft: "780px",
            fontFamily: "Inter",
          }}
        >
          Welcome back !
        </h2>
        <span
          style={{
            position: "absolute",
            top: "160px",
            marginBottom: "-20px",
            marginLeft: "750px",
            fontFamily: "Inter",
            fontSize: "14px",
          }}
        >
          Explore More by connecting with us
        </span>
        <TextField
          {...formik.getFieldProps("email")}
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
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          style={{
            marginTop: "-400px",
            marginBottom: "20px",
            marginLeft: "740px",
            fontFamily: "Inter",
            fontSize: "14px",
          }}
        />

        <FormControl
          {...formik.getFieldProps("password")}
          sx={{
            width: { sm: 100, md: 290 },
            "& .MuiInputBase-root": {
              height: 45,
            },
          }}
          variant="outlined"
          style={{
            position: "absolute",
            marginTop: "-320px",
            marginBottom: "20px",
            marginLeft: "-290px",
            fontFamily: "Inter",
            fontSize: "14px",
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
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
            label="Password"
          />
        </FormControl>

        <Link
          href="/forgotten password"
          variant="body2"
          style={{
            position: "absolute",
            marginTop: "-260px",
            marginLeft: "-290px",
          }}
        >
          Forgot password?
        </Link>
        <Button
          type="submit"
          variant="contained"
          className="btn"
          sx={{
            width: { sm: 70, md: 290 },
            "&.MuiInputBase-root": {
              height: 65,
            },
            backgroundColor: "#1C5555",
            "&:hover": {
              backgroundColor: "#1C5555",
            },
            position: "absolute",
            top: "415px",
            left: "740px",
          }}
        >
          Sign in
        </Button>
        <Button
          type="submit"
          variant="contained"
          className="btn"
          sx={{
            width: { sm: 70, md: 290 },
            "&.MuiInputBase-root": {
              height: 65,
            },
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#1C5555",
            },
            position: "absolute",
            top: "460px",
            left: "740px",
            color: "black",
          }}
        >
          Sign in with google
        </Button>

        <span
          style={{
            position: "relative",
            top: "-110px",
            left: "-260px",
          }}
        >
          Don't have an account{" "}
          <Link href="/registration type" variant="body2">
            Sign up
          </Link>
        </span>
      </form>
    </div>
  );
};
export default LoginPage;
