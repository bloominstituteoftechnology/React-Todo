import React from "react";

class TodoForm extends React.Component {
  // Creating a constructor state
  constructor() {
    super();
    this.state = {
      todoText: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({
      todoText: "",
    });
  };

  render() {
    console.log(this.state.todoText);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todoText"
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button>+Add Task</button>
      </form>
    );
  }
}
export default TodoForm;
