import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "../styles/Landing.css";


function Landing(){    
    
    const [existingUser, setExistingUser] = useState(false);

        return (
            <div className="landing-outer">
                <div className="title">
                    <h1 className="title2">Toodue</h1> 
                </div>
                {!existingUser? 
                    <div className="landing-signup">
                        <Signup />
                        <div className="already-signedup">
                           <p>Already signed up?</p>
                            <button onClick={() => setExistingUser(true)}>Login</button> 
                        </div>
                        
                    </div> : <Login />}
                
                
            </div>
        )
}
export default Landing