import {React, useContext, useEffect} from "react";
import { Link } from "react-router-dom";

//import context
import { TaskContext } from "../../context/TaskContext";

//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";
import { Card } from "../../components/cards/Card";
import { Loading } from "../../components/loading/Loading";

import "./Tasks.css"



export const Tasks = () => {
    const { tasks, task, loading, GetTasks } = useContext(TaskContext);

    /**
     * When the page is selected,
     * it start to find any request
     */
    useEffect( () => {
        GetTasks();
    }, []);


    /**
    * click evento in order to catch the selected task
    * @param {*} e 
    */
    const SelectedTask = (e) =>{
        let _id = e.currentTarget.getAttribute("data-item")
        console.log(_id);
    }
    
    return(
        <section className="container">
            <Aside />

            <div className="section-body">
                <Navbar />
                <div className="wrap-elemntary">
                    { 
                        !loading 
                        ?
                            tasks &&
                                <div className="wrap-child">
                                    {
                                        
                                        tasks.map( (item) => {
                                            return <Card key={item._id}  task = { item } SelectedTask = { SelectedTask } />
                                        }) 
                                    }
                                </div>
                        :
                            <Loading />
                    }
                </div>

            </div>
        </section>
    );
}