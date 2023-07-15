import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControl, OutlinedInput, Typography } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../helper/validate";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { resetPassword } from "../helper/helper";
import { useAuthStore } from "../store/store";
import useFetch from "../hooks/fetch.hook";

function ResetPassword() {
  const { username } = useAuthStore((state) => state.auth);
  const navigate = useNavigate();
  const [{ isLoading, apiData, status, serverError }] =
    useFetch("createResetSession");

  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [open, setOpen] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      password: "admin@123",
      confirm_pwd: "admin@123",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let resetPromise = resetPassword({ username, password: values.password });

      toast.promise(resetPromise, {
        loading: "Updating...",
        success: <b>Reset Successfully...!</b>,
        error: <b>Could not Reset!</b>,
      });

      resetPromise.then(function () {
        navigate("/login password");
      });
    },
  });

  if (isLoading) return <h4>isLoading</h4>;
  if (serverError) return <h4>{serverError.message}</h4>;
  if (status && status !== 201)
    return <Navigate to={"/login password"} replace={true}></Navigate>;

  return (
    <Dialog open={open} onClose={handleClose}>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <DialogTitle style={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          component="div"
          fontWeight="bold"
          color="#1C5555"
          fontSize="28px"
          fontFamily="Inter"
        >
          Reset Password
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            {...formik.getFieldProps("password")}
            sx={{ m: 1, width: "300px" }}
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
            {...formik.getFieldProps("confirm_pwd")}
            sx={{ m: 1, width: "300px" }}
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
        </form>
      </DialogContent>
      <DialogActions>
        <Link to="/">
          <Button onClick={handleClose}>Reset</Button>
        </Link>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ResetPassword;
