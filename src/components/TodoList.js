// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor () {
        super();
        this.state = {
                nameOfApp: 'OneDay To Do List',
                tasks: [],
                task: '',
                id: 1,
                completed: false
            };
    }

    handleNameChange = event => {
        this.setState({ [event.target.nameOfApp]: event.target.value });
    };

    handleSubmitTodo = () => {
        const tasks = this.state.tasks;
        const task = { nameOfApp: this.state.task, id: this.state.task + tasks.length };
        tasks.push(task);
        this.setState({ tasks: tasks, task: '' });
    };


    render() {
        console.log('Render was called');
        return (
            <div>
                <h1>{this.state.nameOfApp}</h1>
                {

                }
                <Todo tasks={this.state.tasks} />
                <input
                    name="task"
                    onChange={this.handleNameChange}
                    value={this.state.task}
                    placeholder="What do you want to do today?"
                />
                <button onClick={this.handleSubmitTask}>Add Task</button>
            </div>
        );
    }
}

export default TodoList;