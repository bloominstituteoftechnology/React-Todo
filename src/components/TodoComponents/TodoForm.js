/*
<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
Once a todo is submitted, the Todo List should re-render and show the added todo.
 */

import React from 'react';

class TodoForm extends React.Component {
    // Constructor with state
    constructor() {
        super();
        this.state = {
            todoText: ''
        };
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({
            todoText: e.target.value
        });
    };

    // class property to submit form
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
                <input
                    type="text"
                    name="todo"
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                />
                <button>Submit</button>
            </form>
        );
    }
}

export default TodoForm;
