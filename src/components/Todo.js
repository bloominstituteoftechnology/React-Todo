import React, { Component } from "react";
import TodoList from "./TodoList";
import Complete from "./Complete";

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

    handleListChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleButtonClick = e => {
        const todos = this.state.todos;
        const task = {
            name: this.state.task,
            id: this.state.todos.length,
            completed: false,
            strikeThrough: function(i) {
                const item = document.getElementById(todos[i].id)
                if (todos[i].completed === true) {
                    item.style.textDecoration = "line-through";
                } else {
                    item.style.textDecoration = "none";
                }
            }
        };
        todos.push(task);
        this.setState({ todos: todos, task: '' });
    }
    
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