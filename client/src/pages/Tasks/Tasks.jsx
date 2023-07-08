import {React, useContext, useEffect} from "react";
import { Link } from "react-router-dom";

//import context
import { TaskContext } from "../../context/TaskContext";

//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";
import { Card } from "../../components/cards/Card";



export const Tasks = () => {
    const { tasks, loading } = useContext(TaskContext);

    return(
        <section className="container">
            <Aside />

            <div className="section-body">
                <Navbar />
                

                <div className="wrap-elemntary">
                    { 
                        loading && <h1>Loading</h1>
                    }

                    {
                        tasks.map( (item) => {
                            
                            <Card key={item._id}  task= { item } />
                        })
                    }
                </div>

            </div>
        </section>
    );
}