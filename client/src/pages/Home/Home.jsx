import { React } from "react";
import { Link } from "react-router-dom";


export const Home = () => {
    return(
        <>
            <h1>I am Home page</h1>
            <div className="form-group">
                    <Link to="/logout" className="btn btn-lg btn-warning">
                        Logout
                    </Link>
            </div>

            <div className="form-group">
                    <Link to="/tasks" className="btn btn-lg btn-warning">
                        tasks
                    </Link>
            </div>
        </>
    );
}