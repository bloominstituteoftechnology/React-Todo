import React, { Component } from "react";
import TodoList from "./todolist";
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


    nameReciever = (event) => {
        this.setState({ [event.target.description]: event.target.value });
    }; 
    
    handleSunmitTodo = () => {
        const todos = this.state.todos;
        const todo = { name: this.state.todo, id:this.state.todo };
        todos.push(todo);
        this.setState({ todos: todos, todo: "" });
    };



    render() {
        return (
        <div>
         Todo 
          <todos todo={this.state.todo} />   
            <input name="todos" onChange={this.nameReciever} value={this.state.todos} placeholder="React palyground" />
                <button onClick={this.handleSunmitTodo}>Add todos</button>   
        </div>
        )
    };
    
};

//  *create the todos
//     -recieve infomation about its description
//     -understand once its finished
//     - ability to remove itself once completed

export default Todo;

