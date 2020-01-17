import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: ""
    };
  }

  handleChanges = e => {
    this.setState({
      taskName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.taskName !== "") {
      this.props.addTask(this.state.taskName);
      this.setState({
        taskName: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChanges}
          placeholder="...todo"
          type="text"
          name="task"
          value={this.state.taskName}
        />
        <button>Add</button>
      </form>
    );
  }
}
export default TodoForm;