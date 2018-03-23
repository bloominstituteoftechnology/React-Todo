import React, { Component } from "react";
import TodoList from './TodoList';
class Todo extends Component {
    constructor(){
        super();
        this.state = {
            clicked: false
        };
    }
   

    render() {
        return <div>{this.props.value}</div>
    }
}

export default Todo;