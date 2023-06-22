import mongoose from "mongoose";

//create a new userschema
const userSchema = new mongoose.Schema({
    Email: {type: String, required: true, lowercase: true, trim: true},
    Username: {type: String, required: true, lowercase: true, trim: true},
    Password: {type: String, required: true, trim: true}
});

//export the model
const UserModel = mongoose.model("Users", userSchema);
export default UserModel;