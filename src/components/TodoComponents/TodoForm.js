import React, { Component } from "react";

class TodoForm extends Component {
  state = { todoValue: "" };

  inputChange = e => {
    this.setState({ todoValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    this.props.onAdd(this.state.todoValue);
    this.setState({ todoValue: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          value={this.state.todoValue}
          onChange={this.inputChange}
          placeholder="...todo"
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
