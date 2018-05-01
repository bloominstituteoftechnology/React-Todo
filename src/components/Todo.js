import React, { Component } from "react";
import TodoList from "./TodoList";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
            todos: []
        }
    };
handleNewTask = event => {
    this.setState({ [event.target.taskName]: event.target.value});
};

handleSubmitTast = () => {
    const todos = this.state.todos;
    const task = { taskName: this.state.task, id: todos.length };
    todos.push(task);
    this.setState({ todos: todos, task: ''});
};

render() {
    return (
        <div>
            <h1>ToDo List</h1>

            <TodoList todos={this.state.todos} />

            <input 
                task='task'
                onChange={this.handleNewTask}
                value={this.state.task}
                placeholder='Add a new task here'
            />
            <button onClick={this.handleSubmitTask}>Add Task</button>
        </div>
    )
};
}

export default Todo;
