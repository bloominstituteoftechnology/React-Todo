/*
<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
Once a todo is submitted, the Todo List should re-render and show the added todo.
*/
import React from 'react';
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  changeTaskHandler = event => {
    // console.log('key', event.target);
    this.setState({ input: event.target.value });
  };

  handleAdd = () => {
    let text = this.state.input;
    let task = {
      task: text,
      id: Date.now(),
      completed: false,
    };
    this.props.FormHandle(task);
    this.setState({ input: '' });
  };

  handleClear = () => {
    this.props.clearHandle();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.changeTaskHandler}
          placeholder="...todo"
          value={this.state.input}
        />
        <button onClick={this.handleAdd}>Add Todo</button>
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
