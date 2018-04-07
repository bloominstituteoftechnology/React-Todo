import React, { Component } from 'react';
import { render } from 'react-dom';
import Todo from './Todo'; // Why do we only need ./ here but not above for 'react' and 'react-dom'?

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            tasks: ['wash clothes', 'study JavaScript', 'go to the store', 'work out'],
            newTask: ''
        };
    }

    handleTaskInput = (event) => {
        this.setState({ newTask: event.target.value });
    };

    addTask = (event) => {
        event.preventDefault(); // Why do we need this?
        const tasksList = this.state.tasks;
        tasksList.push(this.state.newTask);
        this.setState({
            newTask: '',
            tasks: tasksList
        });
    };

    render() {
        return (
            <div>
                {this.state.tasks.map((task, i) => <Todo key={i} thing={task} />)} 
                <form onSubmit={this.addTask}>
                    <input type="text" onChange={this.handleTaskInput} placeholder="Add a new task" value={this.state.newTask} />
                </form>
            </div>
        );
    }
}

export default TodoList;

