import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "../styles/Landing.css";


function Landing(){    
    
    const [existingUser, setExistingUser] = useState(false);

        return (
            <div className="landing-outer">
                <h2>Welcome to</h2>
                <h1><b className="title2">2</b>do</h1>
                {!existingUser? 
                    <div className="landing-signup">
                        <Signup />
                        <p>Already signed up?</p>
                        <button onClick={() => setExistingUser(true)}>Login</button>
                    </div> : <Login />}
                
                
            </div>
        )
}
export default Landing