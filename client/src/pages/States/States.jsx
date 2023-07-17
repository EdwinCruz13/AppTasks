import { React } from "react";

import { Link } from "react-router-dom";

//import components
import { Aside } from "../../components/aside/Aside";
import { Navbar } from "../../components/navbar/Navbar";

export const States =()=>{
    return(
        <>
            <section className="container">
        <Aside />

        <div className="section-body">
          <Navbar />

          <div className="wrap-elemntary">
            

            <div className="wrap-child" style={{ width: "100%" }}>
                i am states page
            </div>
          </div>
        </div>
      </section>
        </>
    )
}