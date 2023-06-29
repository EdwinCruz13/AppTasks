import { React } from "react";

import { Card } from "../../components/cards/Card";
import { Signin } from "../../components/forms/Signin"
import { Signup } from "../../components/forms/Signup"

export const SignIn = () => {
    return (
        <>
            <div style = {{width: "350px"}}>
                <Signup />
            </div>

            {/* <div style = {{width: "350px"}}>
                <Card />
            </div> */}

           
            
        </>
    );
}