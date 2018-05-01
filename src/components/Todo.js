import React, { Component } from "react";
import TodoList from "./TodoList";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            task: "",
            todos: []
        };
    }

    handleNewTask = event => {
        this.setState({ task: event.target.value});
    };
    
    handleSubmitTask = () => {
        const todos = this.state.todos;
        const task = { task: this.state.task, id: todos.length };
        todos.push(task);
        this.setState({ todos: todos, task: ""});
    };

    render() {
        return (
            <div>
                <h1>-----Todo List-----</h1>
                
                <TodoList todos={this.state.todos} />
                <input
                    task='task'
                    onChange={this.handleNewTask}
                    value={this.state.task}
                    placeholder='Add new task here'
                />
                <button onClick={this.handleSubmitTask}>Add Task</button>
            </div>
        );
    }
}

export default Todo; 