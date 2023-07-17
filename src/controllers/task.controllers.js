import { dbTransaction  } from "../config/database.js";

//import the model that it will use
import TaskModel from "../models/task.models.js";
import UserModel from "../models/user.models.js";
import TypeModel from "../models/task.type.models.js";
import StateModel from "../models/state.models.js";
import TaskStateModel from "../models/task.state.models.js";



/**
 * get all tasks saved on mongo database
 * return a list of object
 * @param {*} req 
 * @param {*} resp 
 * @returns tasks
 */
export const getTasks = async(req, resp) =>{

    if(!req.authenticated_user)
        resp.status(401).json({error: "no user authenticated"})

    try {
        let tasks;

        //verify if the user is an admin, in this case, return all the tasks
        //if it is not an admin, return just the user´s task list
        const user = await UserModel.findById({_id: req.authenticated_user.Id});

        //get the list from mongoose database
        if(user.isAdmin === true){
            //if it is an admin return all the tasks
            tasks = await TaskModel.find().populate("AssignedTo").populate("AssignedBy").populate("Type").populate("CurrentState");
        }

        else{
            //if it is not an admin return just user's tasks list
            const _tasks = (await TaskModel.find().populate("AssignedTo").populate("AssignedBy").populate("Type").populate("CurrentState"));
            tasks = _tasks.filter( (item) => { return user.Email === item.AssignedTo.Email})
        }
            
        
        return resp.status(200).json(tasks);
    } catch (error) {
        console.log(error)
        resp.status(500).json({error: "error: " + error});
    }
}

/**
 * get an especific task from mongo database
 * return a object
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const getTask = async(req, resp) =>{
    try {
        //get the list from mongoose database
        const task = await TaskModel.findById(req.params.id).populate("AssignedTo").populate("AssignedBy").populate("Type").populate("CurrentState");
        return resp.status(200).json(task);
    } catch (error) {
        resp.status(400).json({error: "error: " + error});
    }
}

/**
 * create a new task
 * @param {*} req 
 * @param {*} resp 
 */
export const createTask = async(req, resp) => {
    //get the main properties
    const { Title, Description, StartDate, DueDate, Notes, Completed, AssignedTo, Type, CurrentState } = req.body;
    var realCompleted = 0;
    console.log(req.body)

    //initializa session with transaction
    const session = await dbTransaction();

    try {
        //find the user who asignes this task
        const userAssignFound = await UserModel.findById(req.authenticated_user.Id);
        //find the user
        const userFound = await UserModel.findById( AssignedTo.Id );
        //find the type of task
        const typeFound = await TypeModel.findById(Type.Id);
        //find the state information
        const stateFound = await StateModel.findById(CurrentState.Id);

        

        //define a previous porcentage for completed state
        realCompleted = (stateFound.StateID != -1 && stateFound.StateID != 2) ? Completed : (stateFound.StateID == 2) ? 100 : 0

       //create a new task
       const newTask = await TaskModel.create([{
            Title, Description, StartDate, DueDate, Notes, Completed: realCompleted,
            AssignedTo: userFound, AssignedBy: userAssignFound,
            Type: typeFound, CurrentState: stateFound
        }], { session });


        //save a new task states
        await  TaskStateModel.create([{ 
            Task: newTask[0],  State: stateFound,  
            User: userAssignFound, CurrentState: true, 
            Comments:Notes 
        }], { session });

        await session.commitTransaction();
        session.endSession();

        //return a task
        return resp.status(200).json(newTask[0]);

    } catch (error) {
        session.abortTransaction();
        session.endSession();
        console.log(error)
        resp.status(400).json({error: "error: " + error});
    }
}

/**
 * update an especific task from mongoose database
 * return the updated task
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const updateTask = async(req, resp) =>{
    
    //get the main properties
    const { _id, Title, Description, StartDate, DueDate, Notes, Completed, AssignedTo, Type, CurrentState, Comments } = req.body;
    var realCompleted = 0;

    console.log(req.body)

    //initializa session with transaction
    const session = await dbTransaction();

    try {
        //find the user who asignes this task
        const userAssignFound = await UserModel.findById(req.authenticated_user.Id);
        //find the user
        const userFound = await UserModel.findById( AssignedTo.Id );
        //find the type of task
        const typeFound = await TypeModel.findById(Type.Id);
        //find the state information
        const stateFound = await StateModel.findById(CurrentState.Id);
        //find the task to update
        const taskFound = await TaskModel.findById(req.params.id);
        //find all the state task
        const statetaksFound = await TaskStateModel.find( {Task: taskFound}).populate("State");

        const currentTaskStateFound = statetaksFound.filter( (task) => {return task.CurrentState === true} );

        //

        //define a previous porcentage for completed state
        realCompleted = (stateFound.StateID != -1 && stateFound.StateID != 2) ? Completed : (stateFound.StateID == 2) ? 100 : 0

        //update the task from mongoose database
        const updatedTask = await TaskModel.findByIdAndUpdate( req.params.id, 
                                                             { Title, Description, StartDate, DueDate, Notes, AssignedTo: userFound,
                                                               Type: typeFound, CurrentState: stateFound, Completed: realCompleted  },
                                                             {new: true} );

                                                     
        // if it is a new task state, then, update CurrentState(boolean) to false value,
        // add the data to TaskStates with CurrentState(boolean) to true value
        if(currentTaskStateFound[0].State.StateID != stateFound.StateID){
            //update the currentState to false value from TaskState Collection
            await TaskStateModel.updateMany({ Task: taskFound}, { CurrentState: false });

            // add a new taskState with CurrentState to true value
            await TaskStateModel.create([{ 
                Task: updatedTask,  State: stateFound,  
                User: userAssignFound, CurrentState: true, Comments 
            }], { session });
        }


        await session.commitTransaction();
        await session.endSession();


        if(!updatedTask) return resp.status(404).json({error: "Task not found"});



        return resp.status(200).json(updatedTask);
    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        console.log(error)
        resp.status(400).json({error: "error: " + error});
    }
}

/**
 * delete an especific task from mongoose database
 * return the deleted task
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const deleteTask = async(req, resp) =>{
    try {
        //get the list from mongoose database
        const deletedTask = await TaskModel.findByIdAndDelete( req.params.id);

        if(!deletedTask) return resp.status(404).json({error: "Task not found"});

        return resp.status(200).json(deletedTask);
    } catch (error) {
        resp.status(400).json({error: "error: " + error});
    }
}