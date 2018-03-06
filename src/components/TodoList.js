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

    handleTodoListInput = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    addTodo = (event) => {
        event.preventDefault();
        const todoList = this.state.todos;
        todoList.push(this.state.newTodo);
        this.setState({
            newTodo: '',
            todos: todoList
        });
    };

    render() {
        return (
            <div>
                {this.state.todos.map(item => <Todo todo={item} />)}
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.handleTodoListInput} placeholder="Add new todo item" value={this.state.newTodo} />
                </form>
            </div>
        );
    }
}

export default TodoList;