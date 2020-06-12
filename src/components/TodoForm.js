import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTask) {
      this.props.addNewTodo(this.state.newTask);
    }

    this.setState({
      newTask: "",
    });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newTask}
          />
          <button type="submit">Add Todo</button>
          <button onClick={this.props.clearTodo}>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
