import React from "react";

class TodoForm extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = { task: "" };
  }

  todoChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitChange = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
  };

  removeItem = event => {
    event.preventDefault();
    this.props.clearDone(this.state.task);
  };

  render() {
    return (
      <form onSubmit={this.submitChange}>
        <input
          type="text"
          value={this.state.task}
          name="task"
          placeholder="add task..."
          onChange={this.todoChangeHandler}
        />
        <button className="add-btn" onChange={this.todoChangeHandler}>
          Add Todo
        </button>
        <button className="clear-btn" onClick={this.removeItem}>
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
