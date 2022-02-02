import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import "./styles/Header.css";
import logo from "./pics/logo192.png";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const { user, isAuthenticated, logout } = useAuth0();
    const navigate = useNavigate();
  
    return (
        isAuthenticated && (
            <div className="header">
                <h4>Admin: {user.name}</h4>
                <div>
                    <img src={logo} alt={user.name}/>
                </div>
                <div className="buttons">
                    <button onClick={() => {navigate("/admindashboard")}}>Home</button>
                    <button onClick={()=> logout()}>Log Out</button>
                </div>
                
            </div> 
        )
    )
}

export default Header