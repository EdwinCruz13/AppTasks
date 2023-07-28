import mongoose, { Mongoose } from "mongoose";

//create a new schema for tasktypes document
const taskTypeSchema = new mongoose.Schema({
    nType: { type: String, require: true, trim: true},
    urlImage: { type: String, require: true, trim: true}
});

//export model
const TaskTypeModel = mongoose.model("TaskTypes", taskTypeSchema);
export default TaskTypeModel;