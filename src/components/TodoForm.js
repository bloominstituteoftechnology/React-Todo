import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }

  handleChanges = e => {
    this.setState({ ...this.state, newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ newTodo: "" });
    this.props.addNewTodo(this.state.newTodo);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChanges}
          type="text"
          name="todo"
          value={this.state.newTodo}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
