import axios from "axios";

//creating backend configuration

const Api = axios.create({
  baseURL: "http://localhost:5500",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});


// Register API
export const registerUserApi = (data) => Api.post('/api/users/create',data)

//Login API
export const loginUserApi = (data) => Api.post('/api/users/login', data)