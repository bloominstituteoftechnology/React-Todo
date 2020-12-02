import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { newTask: "" };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      newTask: e.target.value,
    });
  };

  submitNewTask = (e) => {
    e.preventDefault();
    this.props.addToDo(e, this.state.newTask);
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <div className="todoForm">
        <form onSubmit={this.submitNewTask}>
          <input
            value={this.state.newTask}
            onChange={this.state.handleChange}
            type="text"
            name="task"
            placeholder="Enter New Task"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
