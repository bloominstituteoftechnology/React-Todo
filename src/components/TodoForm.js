import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      chores: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault();
    this.setState({ chores: "" });
    this.props.addTodoItem(this.state.chores);
  };

  render() {
    // console.log("rendering form");
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          name="chores"
          value={this.state.chores}
          placeholder="...todo"
          onChange={this.handleChanges}
        />
        <button type="submit" className="btn btn-success p-1">
          Add ToDo
        </button>
        <button
          className="btn btn-danger p-1"
          onClick={this.props.clearCompleted}
        >
          Remove Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
