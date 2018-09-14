import React, { Component } from 'react';
import LambdaLogo from "./lambdalogo.png";
class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <img className="lambda"src={LambdaLogo} alt="lambda-logo"/>
                <h1 className="app-name">To Do List</h1>
            </div>
        );
    }
}

export default Header;