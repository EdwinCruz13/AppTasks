import axios from "axios";

let axiosConfig = { headers: { "Content-Type": "application/json"} };

const instance = axios.create({
    baseURL: "http://localhost:4000/api/",
    withCredentials: true,
    headers: axiosConfig
});

export default instance