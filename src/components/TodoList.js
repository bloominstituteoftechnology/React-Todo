import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            newTodoItem: "",
            todos: [""]
        };
    }

    handleAddTodo = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmitTodo = () => {
        const { todos } = this.state;
        todos.push(this.state.newTodoItem);
        this.setState({ todos, newTodoItem: "" });
    };

    render() {
        return (
            <div>
                <Todo {...this.state} />
                <input
                    type="text"
                    name="newTodoItem"
                    value={this.state.newTodoItem}
                    placeholder="New To Do Item"
                    onChange={this.handleAddTodo}
                />
                <button onClick={this.handleSubmitTodo}>Add To Do</button>
            </div>
        ); 
    }
}

export default TodoList;