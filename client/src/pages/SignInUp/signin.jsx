import { React } from "react";
import { Signinform } from "../../components/forms/Signinform";
import "./Signinup.css";

export const SignIn = () => {
    return (
        <>
            <div className="signinup-form">
                <section className="lateral left-lateral">
                    <article>
                        <h1>AppTasks</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </article>

                    <article>
                        <h2 style={{fontSize: "32px"}}>Welcome back</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </article>
                </section>

                <section className="lateral right-lateral">
                    <Signinform />
                </section>
            </div>

            {/* <div style = {{width: "350px"}}>
                <Signinform />
            </div> */}

            {/* <div style = {{width: "350px"}}>
                <Card />
            </div> */}

           
            
        </>
    );
}