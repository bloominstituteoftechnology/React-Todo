import React, { Component } from 'react';
import Todo from './Todo';
import DeleteButton from './DeleteButton';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            newTodo: {'text': '', 'completed': false}
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
            newTodo: {'text': '', 'completed': false},
            todos: todoList
        });
    };

    addCompletedButton = (event) => {
        event.preventDefault();
        const deleteButton = <button>x</button>
    };

    render() {
        return (
            <div>
                {this.state.todos.map(item => <Todo todo={item} /> <DeleteButton deletebutton={item} />)}
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.handleTodoListInput} placeholder="Add new todo item" value={this.state.newTodo.text} />
                    
                </form>
            </div>
        );
    }

    
}

export default TodoList;