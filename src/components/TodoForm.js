import React, { Component } from "react";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  handleChanges = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <button type="submit">Add</button>
        <button
          type="button"
          onClick={this.props.clearForm}
        >
          Clear
        </button>
      </form>
    );
  }
}

export default TodoForm;
