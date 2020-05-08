import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newTaskName: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    e.preventDefault();
    this.setState({
      newTaskName: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTaskName);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          task="item"
          placeholder="please enter task"
          value={this.state.newTaskName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
