import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import "../styles/Landing.css";


function Landing(){      
        return (
            <div className="landing-outer">
                <h1><b className="title2">2</b>do</h1>
                <Login />
                <Signup />
            </div>
        )
}
export default Landing