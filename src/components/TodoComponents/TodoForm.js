import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    task: ""
  };

  handleChange = element => {
    console.log(element.target);
    this.setState({
      task: element.target.value
    });
  };

  submit = element => {
    this.props.handleSubmit(element, this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.submit}>
        <input
          placeholder="...todo"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit">Add Todos</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
