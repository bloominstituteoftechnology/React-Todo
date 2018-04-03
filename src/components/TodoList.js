import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: '',
            todos: []
        };
    } 

    handleAddTodo = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSubmitTodo = e => {
        const { todos } = this.state;
        todos.push(this.state.newTodo);
        this.setState({ todos, newTodo: '' });
    };

    handleToggleTodo = e => {
        e.target.classList.toggle('completed');
    }

    render() {
        return <div>
            <h2>To-Do List</h2>
            <Todo {...this.state} toggleTodo={this.handleToggleTodo} />
            <input type="text" name="newTodo" value={this.state.newTodo} placeholder="add new todo" onChange={this.handleAddTodo} />
            <button onClick={this.handleSubmitTodo}>Add Todo</button>
          </div>;
    }
}

export default TodoList;