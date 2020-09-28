import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault();
    this.setState({ item: "" });
    this.props.addTodo(e, this.state.todo);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          value={this.state.todo}
          name="todo"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}
export default TodoForm;
