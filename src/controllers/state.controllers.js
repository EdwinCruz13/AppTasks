import StateModel from "../models/state.models.js";

/**
 * get States saved on mongoose databaase
 * return a list of objects
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const getStates = async(req, resp) => {
    try {
        const States = await StateModel.find();

        return resp.status(200).json(States);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * get a State saved on mongoose databaase
 * return an objects
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const getState = async(req, resp) => {
    try {
        const State = await StateModel.findById(req.params.id);

        return resp.status(200).json(State);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * create a new State to mongoose database
 * return the new State
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const createState = async(req, resp) => {
    const { StateID, nState } = req.body;
    try {
        const newState = await StateModel({ StateID, nState });
        await newState.save();

        return resp.status(200).json(newState);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * update an specific State from mongoose database
 * return the updated State as response
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const updateState = async(req, resp) => {
    try {
        const updatedState = await StateModel.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if(!updatedState) return resp.status(400).json({error: "State not found"})

        return resp.status(200).json(updatedState);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * delete an specific State from mongoose database
 * return the deleted State as response
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const deleteState = async(req, resp) => {
    try {
        const deletedState = await StateModel.findByIdAndDelete(req.params.id, req.body, { new: true});
        if(!deletedState) return resp.status(400).json({error: "State not found"})

        return resp.status(200).json(deletedState);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}