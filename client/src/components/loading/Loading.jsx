import { React } from "react";

import "./Loading.css";

/**
 * return a components for loading charge
 * @returns 
 */
export const Loading = () => {
    return(
        <>
            <div className="loading">
                <i className="fa fa-undo fa-loading" aria-hidden="true"></i>
            </div>
        </>
    )
}