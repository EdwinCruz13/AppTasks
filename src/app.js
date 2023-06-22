import express from "express";
import cors from "cors";
import morgan from "morgan";

//import user routes
import userRoutes from "./routes/user.routes.js";
//import tasks routes
import tasksRoutes from "./routes/task.routes.js"


//create a express app
const appServer = express();


//settings - create a variable
appServer.set("port", 4000);

//some basic middleware
appServer.use(cors());
appServer.use(express.json());
appServer.use(morgan("dev"))


//create routes, they will be routed by http requests
appServer.use("/api/users", userRoutes);
appServer.use("/api/tasks", tasksRoutes);


//export the appserver
export default appServer;




