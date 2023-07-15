import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import pngkey from "../assets/pngkey 1.png";
import logo from "../assets/Arena Logo .png";
import playground from "../assets/Group 15.png";
import ground from "../assets/ground.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";
import { verifyPassword } from "../helper/helper";

function LoginPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // Define the state variable for password visibility

  const handleClickShowPassword = () => {
    // Define the event handler for toggling password visibility
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    // Define the event handler for mouse down on password input
    event.preventDefault();
  };
  const { username } = useAuthStore((state) => state.auth);
  const [{ isloading, apiData, serverError }] = useFetch(`user/${username}`);
  const formik = useFormik({
    initialValues: {
      password: "admin@123",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let loginPromise = verifyPassword({
        username,
        password: values.password,
      });
      toast.promise(loginPromise, {
        loading: "Checking....",
        success: <b>Login Successfully..!</b>,
        error: <b>Passowrd Not Match!</b>,
      });

      loginPromise.then((res) => {
        let { token } = res.data;
        localStorage.setItem("token", token);
        navigate("/display profile");
      });
    },
  });

  if (isloading) return <h4>isLoading</h4>;
  if (serverError) return <h4>{serverError.message}</h4>;

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
            marginTop: "-505px",
            marginBottom: "20px",
            marginLeft: "780px",
            fontFamily: "Inter",
          }}
        >
          Welcome {apiData?.firstName || apiData?.username}
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
        <div>
          <img
            src={apiData?.profile || avatar}
            alt="avatar"
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              marginTop: "-417px",
              marginLeft: "820px",
              borderRadius: "50%",
              border: "4px solid white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
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
            marginTop: "-290px",
            marginBottom: "20px",
            marginLeft: "740px",
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
            top: "435px",
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
            top: "480px",
            left: "740px",
            color: "black",
          }}
        >
          Sign in with google
        </Button>

        <span
          style={{
            position: "relative",
            top: "-100px",
            left: "770px",
          }}
        >
          Forgot password?
          <Link to="/forgotten password " variant="body2">
            Recovery Now
          </Link>
        </span>
      </form>
    </div>
  );
}
export default LoginPassword;
