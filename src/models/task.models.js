import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
    Title: { type: String, required: true, trim: true},
    Description: { type: String, required: true, trim: true},
    DateAt: { type: Date, require: true},
    User: { type: Schema.Types.ObjectId, ref: "Users"}
});

//export model
const TaskModel = mongoose.model("Tasks", taskSchema);
export default TaskModel;