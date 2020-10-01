import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newTask: ""
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    console.log(e.target.task, e.target.value);
    this.setState({ ...this.state, newTask: e.target.value });
  };

  // class property to submit form
  submitTask = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({ ...this.state, newTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          name="item"
          value={this.state.newTask}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;