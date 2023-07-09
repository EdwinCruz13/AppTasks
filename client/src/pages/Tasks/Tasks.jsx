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
    const { tasks, loading } = useContext(TaskContext);

    
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
                                            
                                            return <Card key={item._id}  task = { item } />
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