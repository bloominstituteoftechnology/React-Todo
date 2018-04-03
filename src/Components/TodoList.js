import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [""],
            newTodo:""
        };
    }

    addTodo = (event) => {
        event.preventDefault();
        const newTodo = this.state.newTodo;
        const taskArray = this.state.tasks;
        taskArray.push(newTodo);
        this.setState({ tasks:taskArray, newTodo:""});
    };

    inputNewTask = (event) => {
        this.setState({ newTodo:event.target.value });
    };

    render() {
        return (
            <div>
                {this.state.tasks.map(task => {
                    return <div>{task}</div>;
                })}
                <form onSubmit={this.addTodo}>
                <input 
                type="text"
                value={this.state.addTodo}
                onChange={this.inputNewTask} placeholder="What will you accomplish today?" value={this.state.newTodo} 
                />
                </form>
                </div>
        );
    }
}
export default TodoList;