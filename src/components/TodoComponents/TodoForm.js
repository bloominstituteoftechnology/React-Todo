import React, { Component } from "react";

class TodoForm extends Component {
  state = { todoValue: "", id: null, complete: false };

  inputChange = e => {
    this.setState({
      todoValue: e.target.value,
      id: Math.random() * 10000000,
      complete: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    this.props.onAdd(this.state);
    this.setState({ todoValue: "", id: null, complete: false });
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
