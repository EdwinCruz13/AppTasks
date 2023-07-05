import { React } from "react";
import { Signupform } from "../../components/forms/Signupform";
import "./Signinup.css";

export const SignUp = () => {
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
                        <h2 style={{fontSize: "32px"}}>Become someone like Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </article>
                </section>

                <section className="lateral right-lateral">
                    <Signupform />
                </section>
        </div>
        </>
    )
}