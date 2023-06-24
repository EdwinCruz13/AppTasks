import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
    Title: { type: String, required: true, trim: true},
    Description: { type: String, required: true, trim: true},
    StartDate: { type: Date, require: true},
    DueDate: { type: Date, require: true},
    Notes: {type: String, trim: true},
    Completed: { type: Number, required: true}, //% porcentage completed
    User: { type: Schema.Types.ObjectId, ref: "Users"},
    Type: { type: Schema.Types.ObjectId, ref: "TaskTypes"},
    CurrentState: { type: Schema.Types.ObjectId, ref: "States"}
}, { timestamps: true });

//export model
const TaskModel = mongoose.model("Tasks", taskSchema);
export default TaskModel;