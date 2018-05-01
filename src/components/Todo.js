// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            id: 0,
            completed: false,
            todos: [],
        }
    }

    setTask = event => {
        this.setState({ task: event.target.value});
    };


    submitTask = () => {
        const todos = this.state.todos;
        const task = { task: this.state.task, id: todos.length};
        todos.push(task);
        this.setState({todos: todos, task: ""});

    };

    render() {
        // `render` out some JSX
        return (
          <div>
            <h1>{this.state.Task}</h1>
         
            <TodoList todos={this.state.todos} />
            
            <input
            task="task"
            onChange={this.setTask}
            value={this.state.task}
            placeholder="Task to do."/>
            <button onClick={this.submitTask}>Add Task</button>
          </div>
        );
    }
}


export default Todo;