import mongoose, { Schema } from "mongoose";

//create a new userschema
const userSchema = new mongoose.Schema({
    Email: {type: String, required: true, lowercase: true, trim: true},
    Username: {type: String, required: true, lowercase: true, trim: true},
    Password: {type: String, required: true, trim: true},
    Department: { type: Schema.Types.ObjectId, ref: "Deparments"},
    isAdmin: { type: Boolean, required:true},
    Fullname: { type: String, required: false, trim: true, lowercase: false},
    ImgProfile: { data: Buffer, contentType: String}
}, { timestamps: true });

//export the model
const UserModel = mongoose.model("Users", userSchema);
export default UserModel;