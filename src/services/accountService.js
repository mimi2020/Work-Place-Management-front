import http from "./interceptor/Axiosinterceptor.js";
export default class AccountService
{
  create(data){
    console.log("ajoutttttt")
      return http.post("/account/creationaccount",data);
  }


  getAll(){
    // console.log("liste de users")
      return http.get("/compte/AllAccounts");
  }

  remove(id){
      return http.delete("/compte/deleteaccount/" + id);
  }

  update(id, data){
      return http.put("/compte/updateaccount/" + id, data);
  }

  findByid(id){
      return http.get("/compte/account/"+id);
  }

 total(id){
console.log("success to access to total function")
 return http.get("/account/total/"+id);
}

HistoryOfOperations(id){
  return http.get("/account/HistpryOfOperations/"+id)
}

}
