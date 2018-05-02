// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor () {
        super();
        this.state = {
                todos: [],
                newTodo: '',
        };
    }

    addTodo = (e) => {
        e.preventDefault();
        const updatedTodos = this.state.todos;
        updatedTodos.push(this.state.newTodo);
        this.setState({
            todos: updatedTodos,
            newTodo: ''
        });
    };

    handleNewTodoInput = (e) => {
        this.setState({ newTodo: e.target.value });
    };

    render() {
        return (
            <div>
                {this.state.todos.map((todo, i) => <Todo key={i} todo={todo} />)}
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.handleNewTodoInput} placeholder="Add a task" value={this.state.newTodo} />
                </form>
            </div>
        );
    }
}

export default TodoList;