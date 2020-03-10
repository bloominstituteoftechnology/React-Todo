import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  handleChanges = e => {
    console.log(e.target.value);
    this.setState({
      task: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
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
          onChange={this.handleChanges}
          value={this.state.task}
        />
        <button type="submit">Add</button>
        {/* <button type="submit">Clear</button> */}
      </form>
    );
  }
}

export default TodoForm;
