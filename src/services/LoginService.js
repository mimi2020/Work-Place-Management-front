import http from "./interceptor/Axiosinterceptor.js";

export default class LoginService
{ 
  login(data){
    console.log("ajoutttttt" ,data)
  
   
      return http.post("/auth/login/",data)
  }


  
}
