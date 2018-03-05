import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();

        this.state = {
            todoListItem: ['laundry','washing dishes', 'gardening'],
            newTodo: ''
        };
    }

    handleTodoListInput = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    addTodoList = (event) => {
        event.preventDefault();
        const todoList = this.state.todoListItem;
        todoList.push(this.state.newTodo);
        this.setState({
            newTodo: '',
            todoListItem: todoList
        });
    };

    render() {
        return (
            <div>
                {this.state.todoListItem.map(item => <div>{item}</div>)}
                <form onSubmit={this.addTodoList}>
                    <input type="text" onChange={this.handleTodoListInput} placeholder="Add new todo item" value={this.state.newTodo} />
                </form>
            </div>
        );
    }
}

export default Todo;