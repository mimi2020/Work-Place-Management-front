import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../../services/LoginService";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControl,
  MenuItem,
} from "@material-ui/core";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate();
  const handelChange = (e) => {
    localStorage.removeItem("idUser");
        setUser({ ...user, [e.target.name]: e.target.value });
  };
  const Auth = new LoginService()
  const handelLogin = async(e) => {
    e.preventDefault();
    const result = Auth.login(user).then((res) => {
    // const result =  loginApi(user).then((res) => {
      const idStorage = res.data.user._id;
      localStorage.setItem("idUser",idStorage);
       if(res.data.user.role=="admin"){
        console.log("admiiiiin and id is:" ,localStorage.getItem("idUser"))
    
      navigate("/dashboards/dashboard1")
        
       }
       else {
        console.log("this is user??",res.data.user.role)
        console.log("user and id is:" ,localStorage.getItem("idUser"))
    
       
       navigate("/dashboards/Dashboard1User")}
       
    });
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <div class="login-container lightmode">
        <div class="login-box animated fadeInDown">
          {/* <div class="login-logo"></div> */}
          <p style={{ fontSize:"25px" ,textAlign:"center"}}>login</p>
          <div class="login-body">
            <div class="login-title">
              <strong>Log In</strong> to your account
            </div>
           
          </div>
          
        </div>
      </div>
    

        <div>
        <div>
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* Basic Checkbox */}
          {/* ------------------------------------------------------------------------------------------------ */}
          <Card
            variant="outlined"
            sx={{
              p: 0,
            }}
          >
            <Box
              sx={{
                padding: "15px 30px",
              }}
              display="flex"
              alignItems="center"
            >
              <Box flexGrow={1}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
             Login Interface
                </Typography>
              </Box>
            </Box>
            <Divider />
            <CardContent
              sx={{
                padding: "30px",
              }}
            >
            <form>

              <div class="col-md-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="E-mail"
                    name="email"
                 
                    onChange={handelChange}
                    value={user.email}
                  />
                </div>

             
                <div class="col-md-12">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    onChange={handelChange}
                    value={user.password}
                  />
                </div>
              
       
                <br></br>
                <div>
                  <Button color="primary" variant="contained"  onClick={(e) => handelLogin(e)}>
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        </div>
        </div>


  );
}

export default Login;
