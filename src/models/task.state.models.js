import mongoose, { Schema } from "mongoose";

const taskStateSchema = new mongoose.Schema({
    Task: { type: Schema.Types.ObjectId, ref: "Tasks", require: true},
    State: { type: Schema.Types.ObjectId, ref: "States", require: true},
    User: { type: Schema.Types.ObjectId, ref: "Users", require: true},
    SavedDate: { type: Date, default: Date.now},
    Comments: {type: String, default: 'No Comments'},
    CurrentState: { type: Boolean, require: true} //1 currente state, 0 record states
}, { timestamps: true });

//export model
const TaskModel = mongoose.model("TaskStates", taskStateSchema);
export default TaskModel;