// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor () {
        super();
        this.state = {
                title: 'OneDay To Do List',
                task: '',
                id: 1,
                completed: false
            };
    }

    handleNameChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmitTodo = () => {
        const todos = this.state.todos;
        const task = { name: this.state.task, id: this.state.task + todos.length };       
        todos.push(task);
        this.setState({ todos: todos, task: '' });
    };

    render() {
        console.log('Render was called');
        return (
            <div>
                <h1>{this.state.title}</h1>
                {

                }
                <Todo todos={this.state.todos} />
                <input
                    name="task"
                    onChange={this.handleNameChange}
                    value={this.state.task}
                    placeholder="What do you want to do today?"
                />
                <button onClick={this.handleSubmitTodo}>Add Task</button>
            </div>
        );
    }
}

export default TodoList;