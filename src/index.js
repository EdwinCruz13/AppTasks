import appServer from "./app.js";
import { dbConnection } from "./config/database.js";
import dotenv from "dotenv";

//initialize the .env variables components
dotenv.config();



//execute the server asynchronically mode
(async () => {
    //start database connection
    await dbConnection();

    //execute express server
    await appServer.listen(appServer.get("port"), () => {
      console.log(`Server on port ${appServer.get("port")}`);
    });
})();
