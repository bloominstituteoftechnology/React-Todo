// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from 'react';

class TodoForm extends React.Component {
    render () {
        return (
            <div>
                <input type="text" onChange={this.props.handleInput} placeholder="...todo" value={this.props.task} />
                <button onClick={this.props.addItem}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;

