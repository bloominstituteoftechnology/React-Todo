import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            newTodo: ''
        };
    }

    handleTodoInput = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    addTodo = (event) => {
        event.preventDefault();
        const todosList = this.state.todos;
        todosList.push(this.state.newTodo);
        this.setState({
            newTodo: '',
            todos: todosList
        });
    };

    render() {
        return (
            <div>
                {this.state.todos.map( (todo, index) => <Todo key={index} todo={todo} />)}
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.handleTodoInput} placeholder="Add a new Todo" value={this.state.newTodo} />
                </form>
            </div>
        );
    }
}

export default TodoList;