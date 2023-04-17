import http from "./interceptor/Axiosinterceptor.js";

export default class AccountService
{ 
  create(id,data){
    console.log("ajoutttttt" ,data)
   //   return http.post("/operation/creationOperation",data);
   
      return http.post("/operation/createMalek/"+id,data)
  }


  getAll(){
    // console.log("liste de users")
      return http.get("/operation/Operations");
  }

  remove(id){
      return http.delete("/operation/deleteOperation/" + id);
  }

  update(id, data){
      return http.put("/operation/updateOperation/" + id, data);
  }

  findByid(id){
      return http.get("/account/account/"+id);
  }

  operationsForOneClient(id){
    return http.get("/operation/AllOperationByIdClient/"+id)
  }


 total(id){
console.log("success to access to tala function")
 return http.get("/account/total/"+id);
}

}
