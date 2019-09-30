import React, { Component } from "react";

class TodoForm extends Component {
  state = { todoValue: "" };

  inputChange = e => {
    this.setState({ todoValue: e.target.value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="todo"
          value={this.state.todoValue}
          onChange={this.inputChange}
          placeholder="...todo"
        />
        <button onClick={props.addHandler}>Add Todo</button>
        <button onClick={props.clearHandler}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
