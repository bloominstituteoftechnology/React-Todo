import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }
  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      newTodo: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  };
  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <button type="submit">Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}
export default TodoForm;
