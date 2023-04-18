import React, { Component, useState, useEffect, useRef } from "react";
import QRCode from "qrcode";
import UserService from "../../services/userService";

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
function App2() {
  const [text, setText] = useState("");
  const canvasRef = useRef();
  const [users, setUsers] = useState([])
  const [size, setSize] = useState(256);
  const US = new UserService()

  useEffect(() => {
    FindAllUsersFromBack()
    QRCode.toCanvas(
      canvasRef.current,
      // QR code doesn't work with an empty string
      // so we are using a blank space as a fallback
      text || " ",
      (error) => error && console.error(error)
    );
  }, [text]);

  const FindAllUsersFromBack = () => {

    // US.getAll().then((res) => { setUsers(res.data.data); console.log("users are:", res.data.data) })
    US.getAll().then((res) => { setUsers(res.data.data); console.log("users are:", res.data.data) })
  }


  return (
    <div>


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
          
         
              <form>

                <div>
                  
                </div>
                <div>
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <br />

                  <canvas ref={canvasRef} size={256} />
                </div>

          
              </form>
            
          </Card>
        </div>
      </div>
    </div>


  );
}

export default App2;
