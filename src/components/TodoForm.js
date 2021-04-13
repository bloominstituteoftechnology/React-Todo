
import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          placeholder="add todo..."
          onChange={this.props.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;