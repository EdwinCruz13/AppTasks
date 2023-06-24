import mongoose from "mongoose";

//create a new schema for state document
const stateSchema = new mongoose.Schema({
    StateID: {type: Number, unique:true, required: true},
    nState: { type: String, require: true, trim: true}
})

//export the model
const stateModel = mongoose.model("States", stateSchema);
export default stateModel;