import React, { Component } from 'react';
import Strike from './Strike';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
            newTask: ''
        };
    }

    addTask = (event) => {
        event.preventDefault();
        const tasksList = this.state.tasks;
        tasksList.push(this.state.newTask);
        this.setState({
            newTask: '',
            tasks: tasksList
        });
    };

    handleTaskInput = (event) => {
        this.setState({ newTask: event.target.value });
    };

    render() {
        return (
            <div>
                {this.state.tasks.map((task, i) => <Strike key={i} thing={task} />)}
                <form onSubmit={this.addTask}>
                    <input type="text" onChange={this.handleTaskInput} placeholder="Add a new task" value={this.state.newTask} />
                </form>
            </div>
        );
    }
}

export default TodoList;