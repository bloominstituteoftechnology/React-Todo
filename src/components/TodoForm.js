import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    console.log(e.target.task, e.target.value);
    this.setState({ ...this.state, newTodo: e.target.value });
  };

  // class property to submit form
  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ ...this.state, newTodo: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          name="item"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;