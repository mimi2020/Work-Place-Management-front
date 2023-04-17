import http from "./interceptor/Axiosinterceptor.js";
export default class TodoService
{
  create(data){
    console.log("data from todoService",data)
      return http.post("/todo/createTodo",data);
  }


  getAll(){
    // console.log("liste de users")
      return http.get("/todo/AllTodoList");
  }

//   remove(id){
//       return http.delete("/user/deleteuser/" + id);
//   }

//   update(id, data){
    
//       return http.put("/user/updateUser/"+ id, data);
    
//   }

//   findByid(id){
//       return http.get("/user/getUserById/"+id);
//   }

  

}
//  getCarsOfOneUser(id){

//  return http.get("/user/CarsOfOneUser/"+id)
// }


