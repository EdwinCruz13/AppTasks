import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//import user routes
import usersRoutes from "./routes/user.routes.js";
//import tasks routes
import tasksRoutes from "./routes/task.routes.js"
//import departments routes
import departmentsRoutes from "./routes/department.routes.js";
//import taskTypes routes
import typeRoutes from "./routes/task.type.routes.js";
//import States routes
import stateRoutes from "./routes/state.routes.js";


//create a express app
const appServer = express();


//settings - create a variable
appServer.set("port", 4000);

//some basic middleware
appServer.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
appServer.use(express.json());
appServer.use(morgan("dev"));
appServer.use(cookieParser());


//create routes, they will be routed by http requests
appServer.use("/api/users", usersRoutes);
appServer.use("/api/tasks", tasksRoutes);
appServer.use("/api/departments", departmentsRoutes);
appServer.use("/api/types", typeRoutes);
appServer.use("/api/states", stateRoutes);


//export the appserver
export default appServer;




