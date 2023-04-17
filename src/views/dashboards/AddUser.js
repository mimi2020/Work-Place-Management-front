// import React from "react";
// import { useState,useEffect} from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardContent,
//   Divider,
//   Box,
//   Typography,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Button,
//   Grid,
//   RadioGroup,
//   Radio,
//   FormControl,
//   MenuItem,
//   Select
// } from "@material-ui/core";
// import Userserivice from "../../services/userService";
// function AddUser (){
//      const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [phone, setphone] = useState("");
//   const [adress, setadress] = useState("");
//   const [role, setrole] = useState("");
//   const [photo, setphoto] = useState("");
//   const [Id_Departement, setId_Departement] = useState([]);
//     const onFileChange = event => { setphoto(event.target.files[0]) };
//   const user = new Userserivice();
//   const navigate = useNavigate();
//   const AddUserFunction = ()=>{
//     console.log("OK")
//   // const data={"nom":nom,"email":email,"password":password,"role":role}
//    const formdata = new FormData();
//     formdata.append("name",name)
//    formdata.append("email",email)
//    formdata.append("password",password)
//    formdata.append("phone",phone)
//    formdata.append("adress",adress)
//    formdata.append("role",role)
//    formdata.append("ID_Training",Id_Departement)
//     console.log("formdata:",formdata).append("name",name)
//    formdata.append("email",email)
//    formdata.append("password",password)
//    formdata.append("phone",phone)
//    formdata.append("adress",adress)
//    formdata.append("role",role)
//    formdata.append("ID_Training",Id_Departement)
//     console.log("formdata:",formdata)
//   user.create(formdata).then((res) => {
//     console.log("User added: ", res);
//     navigate("/ListOfUsers");
//   });
//     }
//     return (
//       <div>
//         {/* ------------------------------------------------------------------------------------------------ */}
//         {/* Basic Checkbox */}
//         {/* ------------------------------------------------------------------------------------------------ */}
//         <Card
//           variant="outlined"
//           sx={{
//             p: 0,
//           }}
//         >
//           <Box
//             sx={{
//               padding: "15px 30px",
//             }}
//             display="flex"
//             alignItems="center"
//           >
//             <Box flexGrow={1}>
//               <Typography
//                 sx={{
//                   fontSize: "18px",
//                   fontWeight: "500",
//                 }}
//               >
//                 Ajouter Utilisateur
//               </Typography>
//             </Box>
//           </Box>
//           <Divider />
//           <CardContent
//             sx={{
//               padding: "30px",
//             }}
//           >
//             <form>
//               <TextField
//                 id="default-value"
//                 label=" Name"
//                 variant="outlined"
//                 defaultValue="user1"
//                 fullWidth
//                 sx={{
//                   mb: 2,
//                 }}
//                 value={name}
//                 onChange={(e) => setname(e.target.value)}
//               />
//               <TextField
//                 id="email-text"
//                 label="Email"
//                 type="email"
//                 variant="outlined"
//                 fullWidth
//                 sx={{
//                   mb: 2,
//                 }}
//                 value={email}
//                 onChange={(e) => setemail(e.target.value)}
//               />
//               <TextField
//                 id="outlined-password-input"
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 sx={{
//                   mb: 2,
//                 }}
//                 value={password}
//                 onChange={(e) => setpassword(e.target.value)}
//               />
//               <TextField
//                 id="default-value"
//                 label="dataOfBirth "
//                 variant="outlined"
//                 defaultValue="user1"
//                 fullWidth
//                 sx={{
//                   mb: 2,
//                 }}
//                 value={role}
//                 onChange={(e) => setrole(e.target.value)}
//               />
//               <TextField
//                 id="country"
//                 label="country "
//                 variant="outlined"
//                 defaultValue="user1"
//                 fullWidth
//                 sx={{
//                   mb: 2,
//                 }}
//                 value={setphone}
//                 onChange={(e) => setphone(e.target.value)}
//               />
//               <TextField
//                 id="gender"
//                 label="gender "
//                 variant="outlined"
//                 defaultValue="user1"
//                 fullWidth
//                 sx={{
//                   mb: 2,
//                 }}
//                 value={adress}
//                 onChange={(e) => setadress(e.target.value)}
//               />
//               <TextField
//                 id="ID_Training"
//                 label="ID_Training "
//                 variant="outlined"
//                 defaultValue="user1"
//                 fullWidth
//                 sx={{
//                   mb: 2,
//                 }}
//                 value={Id_Departement}
//                 onChange={(e) => setId_Departement(e.target.value)}
//               />
            
//               <br></br>
//               <div>
//                 <div calss="col-md-3">Picture</div>
//                 <div class="col-md-7">
//                   <input
//                     type="file"
//                     class="form-control"
//                     onChange={onFileChange}
//                   />
//                 </div>
//               </div>
//               <br></br>
//               <div>
//                 <Button
//                   color="primary"
//                   variant="contained"
//                   onClick={AddUserFunction}
//                 >
//                   Submit
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     );
//     };
// export default AddUser