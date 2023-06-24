import mongoose, { Schema } from "mongoose";

const taskStateSchema = new mongoose.Schema({
    Task: { type: Schema.Types.ObjectId, ref: "Tasks"},
    State: { type: Schema.Types.ObjectId, ref: "States"},
    User: { type: Schema.Types.ObjectId, ref: "Users"},
    SavedDate: { type: Date, default: Date.now},
    Comments: {type: String, default: 'No Comments'},
    CurrentState: { type: Boolean, require: true} //1 currente state, 0 record states
}, { timestamps: true });

//export model
const TaskModel = mongoose.model("TaskStates", taskStateSchema);
export default TaskModel;