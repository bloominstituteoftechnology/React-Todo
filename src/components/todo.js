import React, { Component } from "react";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class Todo extends Component {
    constructor() {
        super();
        this.state = {
        todos: "",
        todo: "",
        
        }
    };


    namereciever = (event) => {
        this.setState({ [event.target.description]: event.target.value });
    }; 
    
    handleSunmitTodo = () => {
        const todos = this.state.todos;
        const todo = {name: this.state.todo, id:this.state.todo };
        todos.push(todo);
        this.seyState({ todos: todos, todo: "" });
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

