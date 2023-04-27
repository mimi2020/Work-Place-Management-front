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
import departementService from "../../services/departementService";


import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"


export default function Departements() {
  const [departements, setdepartements] = useState([])
  const [ListOfEmployers,setListOfEmployers]= useState([])
  const US = new departementService()
 
  const navigate = useNavigate()



  useEffect(() => {
    FindAlldepartementsFromBack()


  }, [])


  const FindAlldepartementsFromBack = () => {

    // US.getAll().then((res) => { setdepartements(res.data.data); console.log("departements are:", res.data.data) })
    US.getAll().then((res) => {
          setdepartements(res.data);
          setListOfEmployers(res.data.ListOfEmployers)
          console.log("departements are:", res.data) })
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
            FindAlldepartementsFromBack();
            Swal.fire("Supprimé!", "Votre fichier a été supprimé.", "Succès");
          }
        });
      }
    });
  };
  //************************ */


  const update = (id) => {
    navigate("/dashboards/editdepartement/" + id, { state: { id: id } })
  }

  const ViewDetailsClient = (id) => {
    navigate("/dashboards/ViewDetailsClient/" + id, { state: { id: id } })
  }
const FindSallon =(id)=>{
//   navigate("/dashboards/AllOperationsForClient/"+ id,{state:{id:id}})

Swal.fire({
    title: "Vous-êtez sûr??",
    text: "Vous chercher un emplacement pour ce departement!",
    icon: "avertissement",
    showCancelButton: true,
    confirmButtonColor: "#3085D6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui, chercher sallon!",
  }).then((result) => {
    if (result.isConfirmed) {
      US.reservation(id).then((res) => {
    
        console.log(res.status);
        console.log("resposne", res);
        if (res.status === 200) {
            Swal.fire("Trouvé!", "", "Succès");
         // FindAlldepartementsFromBack();
        //   Swal.fire("Trouvé!", "", "Succès");
        }
      });
    }
  });

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
                Name & TMs
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
          {departements.map((departement) => (
            <TableRow key={departement._id}>
              <TableCell>
                <Avatar
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                  // src={"http://localhost:3000/upload/" + departement.photo}
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
                      {departement.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {departement.ListOfEmployers.length}
                    </Typography>
                  </Box>
                </Box>
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
                  onClick={(e) => { update(departement._id) }}
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
                  onClick={(e) => { ViewDetailsClient(departement._id) }}

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
                  label="View corresponding sallon"
                  onClick={(e) => { FindSallon(departement._id) }}

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
                  onClick={(e) => { deleteClient(departement._id) }}

                ></Chip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>



    </div>
  )
}
