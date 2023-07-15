import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";
import { profileValidation } from "../helper/validate";
import { useFormik } from "formik";
import convertToBase64 from "../helper/convert";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";
import { updateUser } from "../helper/helper";

export default function DisplayProfile() {
  const navigate = useNavigate();
  const { username } = useAuthStore((state) => state.auth);

  const [{ isloading, apiData, serverError }] = useFetch();

  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      firstName: apiData?.firtName || "",
      lastName: apiData?.lastName || "",
      email: apiData?.email || "",
      mobile: apiData?.mobile || "",
      address: apiData?.address || "",
    },
    enableReinitialize: true,
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, {
        profile: file || apiData?.profile || "",
      });
      let updatePromise = updateUser(values);

      toast.promise(updatePromise, {
        loading: "Updating..",
        success: <b>Update Successfully</b>,
        error: <b>Could not Update!</b>,
      });
      console.log(values);
      // Add your logic for form submission here
    },
  });
  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  // logout handler function
  function userLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  if (isloading) return <h4>isLoading</h4>;
  if (serverError) return <h4>{serverError.message}</h4>;
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <header
        style={{
          background: "#eeeeee",
          padding: "0 20px 0 20px",
          position: "absolute",
          width: "550px",
          height: "520px",
          left: "360px",
          top: "90px",
          borderRadius: "5px",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <h2
            style={{
              position: "absolute",
              marginTop: "45px",
              marginBottom: "20px",
              marginLeft: "250px",
              fontFamily: "Inter",
              fontSize: "32px",
              color: "#1C5555",
            }}
          >
            Profile
          </h2>
          <span
            style={{
              position: "absolute",
              top: "90px",
              marginBottom: "-20px",
              marginLeft: "200px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          >
            You can update the details
          </span>
          <div>
            <label htmlFor="profile">
              <img
                src={apiData?.profile || file || avatar}
                alt="avatar"
                style={{
                  width: "70px",
                  height: "70px",
                  position: "absolute",
                  marginTop: "120px",
                  marginLeft: "250px",
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

          <TextField
            {...formik.getFieldProps("firstName")}
            margin="normal"
            required
            placeholder="First Name"
            id="fname"
            name="fname"
            type="text"
            sx={{
              width: { sm: 100, md: 200 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            style={{
              position: "absolute",
              top: "210px",
              marginBottom: "-20px",
              marginLeft: "50px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />

          <TextField
            {...formik.getFieldProps("lastName")}
            margin="normal"
            required
            placeholder="Last Name"
            id="lname"
            name="lname"
            type="text"
            sx={{
              width: { sm: 100, md: 200 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            style={{
              position: "absolute",
              top: "210px",
              marginBottom: "-20px",
              marginLeft: "300px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />
          <TextField
            {...formik.getFieldProps("mobile")}
            margin="normal"
            required
            placeholder="Contact Number"
            id="mobile"
            name="mobile"
            type="text"
            sx={{
              width: { sm: 100, md: 200 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            style={{
              position: "absolute",
              top: "280px",
              marginBottom: "-20px",
              marginLeft: "50px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />

          <TextField
            {...formik.getFieldProps("email")}
            margin="normal"
            required
            placeholder="Email"
            id="email"
            name="email"
            type="text"
            sx={{
              width: { sm: 100, md: 200 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            style={{
              position: "absolute",
              top: "280px",
              marginBottom: "-20px",
              marginLeft: "300px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />
          <TextField
            {...formik.getFieldProps("address")}
            margin="normal"
            required
            placeholder="Address"
            id="address"
            name="address"
            type="text"
            sx={{
              width: { sm: 100, md: 450 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            style={{
              position: "absolute",
              top: "350px",
              marginBottom: "-20px",
              marginLeft: "50px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />
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
              top: "430px",
              left: "180px",
            }}
          >
            Update
          </Button>
          <span
            style={{
              position: "relative",
              top: "470px",
              left: "10px",
            }}
          >
            come back later
            <button onClick={userLogout} to="/" variant="body2">
              Logout
            </button>
          </span>
        </form>
      </header>
    </div>
  );
}
