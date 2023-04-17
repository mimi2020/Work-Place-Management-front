import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Avatar,
} from "@material-ui/core";
import UserService from "../../services/userService";


import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"


export default function Users() {
  const [users, setUsers] = useState([])
  const US = new UserService()
 
  const navigate = useNavigate()



  useEffect(() => {
    FindAllUsersFromBack()


  }, [])


  const FindAllUsersFromBack = () => {

    // US.getAll().then((res) => { setUsers(res.data.data); console.log("users are:", res.data.data) })
    US.getAll().then((res) => { setUsers(res.data.data); console.log("users are:", res.data.data) })
  }




  const deleteClient = (id) => {
    console.log("ok supprimer", id);
    Swal.fire({
      title: "Vous-êtez sûr??",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "avertissement",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-le!",
    }).then((result) => {
      if (result.isConfirmed) {
        US.remove(id).then((res) => {
          console.log(res.status);
          console.log("resposne", res);
          if (res.status === 200) {
            FindAllUsersFromBack();
            Swal.fire("Supprimé!", "Votre fichier a été supprimé.", "Succès");
          }
        });
      }
    });
  };
  //************************ */


  const update = (id) => {
    navigate("/dashboards/editUser/" + id, { state: { id: id } })
  }

  const ViewDetailsClient = (id) => {
    navigate("/dashboards/ViewDetailsClient/" + id, { state: { id: id } })
  }
const ALLOperationsForClient =(id)=>{
  navigate("/dashboards/AllOperationsForClient/"+ id,{state:{id:id}})
}

const TransfertMoney =(id)=>{
  navigate("/dashboards/transfert/"+id,{state:{id:id}})
}
  return (
    <div>clients
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Id
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Assigned
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name
              </Typography>
            </TableCell>

            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>
                <Avatar
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                  // src={"http://localhost:3000/upload/" + user.photo}
                >

                </Avatar>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {user.email}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {user.password}
                </Typography>
              </TableCell>



              <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "secondary.main",
                    color: "#fff",
                  }}
                  size="small"
                  label="Edit"
                  onClick={(e) => { update(user._id) }}
                ></Chip>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "success.main",
                    color: "#fff",
                  }}
                  size="small"
                  label="View Details"
                  onClick={(e) => { ViewDetailsClient(user._id) }}

                ></Chip>

              </TableCell>

              <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "#C38218",
                    color: "#fff",
                  }}
                  size="small"
                  label="View All Operations"
                  onClick={(e) => { ALLOperationsForClient(user._id) }}

                ></Chip>

              </TableCell>


<TableCell>
<Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "#5499C7",
                    color: "#fff",
                  }}
                  size="small"
                  label="Transfert Money"
                  onClick={(e) => { TransfertMoney(user._id) }}

                ></Chip>

</TableCell>
              <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "error.main",
                    color: "#fff",
                  }}
                  size="small"
                  label="Delete"
                  onClick={(e) => { deleteClient(user._id) }}

                ></Chip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>



    </div>
  )
}
