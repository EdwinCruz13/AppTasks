import mongoose from "mongoose";

//export the dbconnection
export const dbConnection = async() => {
    try {
        //connect a database
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGODB_URI);


        //when the connection is opened show through console a opened connection
        await mongoose.connection
        .once("open", () => {
            console.log(`MongoDB is Running on ${process.env.MONGODB_URI}`);
        })
        .on("disconnected", () => console.warn("MongoDB is disconnected"))
        .on("error", (err) => {
            console.error(err);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


const conn = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        const conn = mongoose.connection;

        
        return conn;
    } catch (error) {
        
    }
}

export default conn;