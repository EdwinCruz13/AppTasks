import {React} from "react";
import { Link } from "react-router-dom";

export const Tasks = () => {
    return(
        <>
            <div><h2>I am the tasks pages</h2></div>
            <div className="form-group">
                    <Link to="/home" className="btn btn-lg btn-warning">
                    home
                    </Link>
            </div>
        </>
    );
}