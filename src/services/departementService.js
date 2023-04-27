import http from "./interceptor/Axiosinterceptor.js";
export default class departementService
{
  create(data){
    console.log("add departement departementService")
      return http.post("/departement/create",data);
  }


  getAll(){
    // console.log("liste de departements")
      //return http.get("/departement/Getalldepartements");
      return http.get("/departement");
  }

  remove(id){
      return http.delete("/departement/deletedepartement/" + id);
  }

  update(id, data){
    
      return http.put("/departement/updatedepartement/"+ id, data);
    
  }

  findByid(id){
      return http.get("/departement/getdepartementById/"+id);
  }

  reservation(id)
  {
    return http.get("/hr-director/res"+id)
  }

}
//  getCarsOfOnedepartement(id){

//  return http.get("/departement/CarsOfOnedepartement/"+id)
// }


