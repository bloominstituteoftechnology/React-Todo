//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
//      -Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//      -Once a todo is submitted, the Todo List should re-render and show the added todo.
import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
    }

    addTodoTask() {
        const todoTask = {
            
        }
    }

    render() {
        return (
            <div>
                <input
                    // id = {this.props.id}
                    type="text"
                    placeholder= "Add Todo Task"
                    value = {this.props.todoTask}
                    completed = {this.props.completed}
                    onChange = {this.props.onChange}
                />
                <button onSubmit={this.props.addTodoTask}>
                    Add Todo
                </button>
                <button onClearCompleted={this.props.onClearCompleted}>
                    Clear Completed
                </button>
            </div>
        );
    };
}

export default TodoForm;