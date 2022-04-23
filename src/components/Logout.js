import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { userLogout } from "../actions/userActions"


function Logout ({userLogout}) {
    let navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        userLogout()
        navigate("/")
    }
    return (
        <button onClick={() => logout()}>Logout</button>
    )
}

export default connect(null, {userLogout})(Logout)