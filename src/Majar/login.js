import React, { Component } from "react";
import { Box, TextField, Button, Typography } from "@material-ui/core";
import styles from "../style/styles";
import { NavLink } from "react-router-dom";

export default class login extends Component {
  constructor(props) {
    super();
    this.state = {
      User_Id: "",
      Password: "",
    };
    this.Open = () => {
      var userdetails = JSON.parse(localStorage.getItem("userdetails"));

      var flag = true;
      var wrg = false;
      userdetails.forEach((user) => {
        if (
          this.state.User_Id === user.User_Id &&
          this.state.Password === user.Password
        ) {
          sessionStorage.setItem("user", JSON.stringify(user));
          if (sessionStorage.getItem("userdetails") === null) {
            sessionStorage.setItem("userdetails", JSON.stringify([]));
          }
          var file = JSON.parse(sessionStorage.getItem("userdetails"));
          file.forEach((user) => {
            if (
              user.User_Id ===
              JSON.parse(sessionStorage.getItem("user")).User_Id
            ) {
              wrg = true;
            }
          });
          if (!wrg) {
            file.push(user);
            sessionStorage.setItem("userdetails", JSON.stringify(file));
          }
          this.props.history.push("/home");
          flag = false;
        }
      });
      if (flag) {
        alert("First to Create a Account");
      }
      // if (this.state.User_Id === "" && this.state.Password === "") {
      //   alert("Please fill the fields");
      // } else {
      //   this.props.history.push("/home");

      // }
    };
  }

  render() {
    return (
      <Box style={styles.box}>
        <Box border="1px solid Black" style={styles.form}>
          <Box fontSize="30px" mb={2}>
            Login
          </Box>
          <Box style={styles.boxSize2} width="100%">
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="User_Id"
              required
              type="email"
              name="User_Id"
              value={this.state.User_Id}
              onChange={(event) => {
                this.setState({
                  User_Id: event.target.value,
                });
                console.log(event.target.value);
              }}
            ></TextField>
          </Box>
          <Box style={styles.boxSize2} width="100%">
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Password"
              required
              name="Password"
              type="password"
              value={this.state.Password}
              onChange={(event) => {
                this.setState({
                  Password: event.target.value,
                });
                console.log(event.target.value);
              }}
            ></TextField>
          </Box>
          <Box mt={2} mb={2}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => {
                this.Open();
                console.log("clicked");
              }}
            >
              Login
            </Button>
          </Box>
          <Typography>
            <NavLink to="/user">Create Account</NavLink>
          </Typography>
        </Box>
      </Box>
    );
  }
}
