import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.43.186:8080",
});

export const loginApi = (authData) => API.post('/users/login', authData);
export const signupApi = (authData) => API.post('/users/signup', authData);
