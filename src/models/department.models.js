import mongoose from "mongoose";

//create a new schema for department document
const departmentSchema = new mongoose.Schema({
    nDepartment: { type: String, require: true, trim: true}
})

//export the model
const DepartmentModel = mongoose.model("Deparments", departmentSchema);
export default DepartmentModel;