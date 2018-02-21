import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: '',
        };
    }

    addTodo = (event) => {
        event.preventDefault();
        const updatedTodos = this.state.todos;
        updatedTodos.push(this.state.newTodo);
        this.setState({
            todos: updatedTodos,
            newTodo: ''
        });
    }

    handleNewTodoInput = (event) => {
        this.setState({ newTodo: event.target.value });
    }

    render() {
        return (
            <div>
                {this.state.todos.map((todo, i) => <Todo key={i} todo={todo} />)}
                <form onSubmit={this.addTodo}>
                    <input onChange={this.handleNewTodoInput} value={this.state.newTodo} />
                </form>
            </div>
        )
    }
}

export default TodoList;