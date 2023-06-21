import express from "express";
import cors from "cors";
import morgan from "morgan";

//import user
import userRoutes from "./routes/user.routes.js";


//create a express app
const appServer = express();


//settings - create a variable
appServer.set("port", 4000);

//some basic middleware
appServer.use(cors());
appServer.use(express.json());
appServer.use(morgan("dev"))


//create routes, they will be routed by http request
appServer.use("/api/users", userRoutes);


//export the appserver
export default appServer;




