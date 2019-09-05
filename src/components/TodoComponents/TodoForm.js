import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      taskName: ""
    };
  }
  handleChanges = e => {
    // update state with each keystroke
    this.setState({ taskName: e.target.value });
    console.log(this.state.taskName);
  };

  handleSubmit = e => {
    this.props.addTask(e, this.state.taskName);
    this.setState({ taskName: "" });
  };
  // class property to submit form

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="task"
          value={this.state.taskName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
