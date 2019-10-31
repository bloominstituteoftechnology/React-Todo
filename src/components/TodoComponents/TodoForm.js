import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem: ""
    };
  }

  handleChanges = e => {
    this.setState({
      todoItem: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoItem !== "") {
      this.props.addTask(this.state.todoItem);
      this.setState({
        todoItem: ""
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="What else?"
          onChange={this.handleChanges}
          type="text"
          name="item"
          value={this.state.todoItem}
        />
        <button>Add A Task</button>
      </form>
    );
  }
}

export default TodoForm;
