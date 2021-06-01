import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          name="todo"
          value={this.props.todo}
          onChange={this.props.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
