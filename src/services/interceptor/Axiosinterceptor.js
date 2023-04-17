import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3000"
  ,
  headers: {
    "Content-type": "application/json",
    "Content-Type": "multipart/form-data",
    "Content-type": "application/ x-www-form-urlencoded"
  },
});