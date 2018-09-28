//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
//Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//Once a todo is submitted, the Todo List should re-render and show the added todo.
import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    render() {
        return (
            <div className="todo-form">
                    <input type="text" />
                    <button className="button submit" onClick={this.props.submit}>Add To-do</button>
                    <button className="button clear" onClick={this.props.clear}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;