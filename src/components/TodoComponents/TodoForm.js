import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  submitTask = e => {
    e.preventDefault();
    this.props.addTask(e, this.state.task);
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input type="text" name="task" onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;