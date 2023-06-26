import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
    Title: { type: String, required: true, trim: true},
    Description: { type: String, required: true, trim: true},
    StartDate: { type: Date, require: true},
    DueDate: { type: Date, require: true},
    Notes: {type: String, trim: true},
    Completed: { type: Number, required: true}, //% porcentage completed
    AssignedTo: { type: Schema.Types.ObjectId, ref: "Users", require: true},
    AssignedBy: {type: Schema.Types.ObjectId, ref: "Users", require: true},
    Type: { type: Schema.Types.ObjectId, ref: "TaskTypes", require: true},
    CurrentState: { type: Schema.Types.ObjectId, ref: "States", require: true}
}, { timestamps: true });

//export model
const TaskModel = mongoose.model("Tasks", taskSchema);
export default TaskModel;