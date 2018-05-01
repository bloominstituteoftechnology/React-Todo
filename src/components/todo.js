import React, { Component } from "react";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class Todo extends Component {
    constructor() {
        super();
        this.state = {
        todo:""
        }
    };


    namereciever = (event) => {
        this.setState({ [event.target.description]: event.target.value });
    }; 




    render() {
        return (
        <div>
         Todo placeholder
        </div>
        )
    };
    
};

//  *create the todos
//     -recieve infomation about its description
//     -understand once its finished
//     - ability to remove itself once completed

export default Todo;

