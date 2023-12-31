import React from "react"; // import React
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SecuritySetting() {
  return (
    <div className="App">
      <header
        style={{
          padding: "0 20px 0 20px",
          position: "absolute",
          width: "690px",
          height: "370px",
          left: "420px",
          top: "180px",
          backgroundColor: "#EEEEEE",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            borderLleft: "3px solid #0e351f",
            height: "320px",
            position: "absolute",
            left: "-30px",
            marginLeft: "-3px",
            top: "0",
          }}
        ></div>

        {/* Title of the page */}
        <h2
          style={{
            position: "absolute",
            width: "275px",
            height: "42px",
            left: "60px",
            top: "26px",
            fontFamiliy: "Inter",
            lineHeight: "19px",
            color: "#1C5555",
          }}
        >
          Security Setting
        </h2>
        <form>
          <TextField
            sx={{
              width: { sm: 100, md: 250 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            margin="normal"
            required
            fullWidth
            id="curpassword"
            label="Current Password"
            name="cupass"
            autoComplete="cupass"
            autoFocus
            style={{
              marginTop: "100px",
              marginBottom: "20px",
              marginLeft: "40px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />

          <TextField
            sx={{
              width: { sm: 100, md: 250 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            margin="normal"
            required
            fullWidth
            id="conpas"
            label="Confirm Password"
            name="conpass"
            autoComplete="con"
            autoFocus
            style={{
              marginTop: "25px",
              marginBottom: "20px",
              marginLeft: "350px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />

          <TextField
            sx={{
              width: { sm: 100, md: 250 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
            margin="normal"
            required
            fullWidth
            id="newpass"
            label="New Password"
            name="newpass"
            autoComplete="newpass"
            autoFocus
            style={{
              marginTop: "-65px",
              marginBottom: "20px",
              marginLeft: "40px",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            className="btn"
            sx={{
              width: { sm: 70, md: 150 },
              "&.MuiInputBase-root": {
                height: 65,
              },
              backgroundColor: "#1C5555",
              "&:hover": {
                backgroundColor: "#1C5555",
              },
              position: "absolute",
              top: "295px",
              left: "60px",
            }}
          >
            Save
          </Button>
        </form>
      </header>
    </div>
  );
}
export default SecuritySetting;
