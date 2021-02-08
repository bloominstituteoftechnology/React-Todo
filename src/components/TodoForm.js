import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "" 
    };
  };

  handleTextInput = (e) => {
    this.setState({
      task: e.target.value
    });
  };

  handleTaskAdd = () => {
    this.props.handleAdd(this.state.task);
    this.setState({
      task: ""
    });
  };

  handleTasksClear = () => {
    this.props.handleClear()
  };

  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          placeholder="Enter a todo task"
          onChange={this.handleTextInput}
        />
        <button onClick={this.handleTaskAdd}>Add Task</button>
        <button onClick={this.handleTasksClear}>Clear Completed</button>
      </form>
    );
  };
};

export default TodoForm;