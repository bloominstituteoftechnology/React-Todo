// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
// - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    this.setState({
      item: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item);
  };

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <input
              type = 'text'
              name = 'item'
              value={this.state.item}
              onChange={this.handleChanges}
            />
            <button>Add</button>
          </form>
        );
      }
    }

    export default TodoForm;