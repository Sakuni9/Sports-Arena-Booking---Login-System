import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import pngkey from "../assets/pngkey 1.png";
import logo from "../assets/Arena Logo .png";
import playground from "../assets/Group 15.png";
import ground from "../assets/ground.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";

function LoginUsername() {
  const navigate = useNavigate();
  const setUsername = useAuthStore((state) => state.setUsername);

  const formik = useFormik({
    initialValues: {
      username: "example123",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setUsername(values.username);
      navigate("/login password");
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
        <div>
          <img
            src={avatar}
            alt="avatar"
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              marginTop: "-400px",
              marginLeft: "820px",
              borderRadius: "50%",
              border: "4px solid white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
        <TextField
          {...formik.getFieldProps("username")}
          sx={{
            width: { sm: 100, md: 290 },
            "& .MuiInputBase-root": {
              height: 45,
            },
          }}
          margin="normal"
          required
          fullWidth
          placeholder="Enter your user name"
          name="username"
          autoComplete="username"
          autoFocus
          style={{
            position: "absolute",
            marginTop: "-250px",
            marginBottom: "20px",
            marginLeft: "740px",
            fontFamily: "Inter",
            fontSize: "13px",
          }}
        />
        <Link to="/login password" variant="body2">
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
              top: "445px",
              left: "740px",
            }}
          >
            Let's go
          </Button>
        </Link>

        <span
          style={{
            position: "relative",
            top: "-110px",
            left: "780px",
          }}
        >
          Don't have an account?
          <Link to="/registration type" variant="body2">
            Sign up
          </Link>
        </span>
      </form>
    </div>
  );
}
export default LoginUsername;
