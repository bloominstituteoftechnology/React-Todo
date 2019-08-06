import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    // console.log(this.state.todo);
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitTodo}>
          <input
            type="text"
            value={this.state.todo}
            name="todo"
            onChange={this.handleChanges}
          />
          <button className="addbtn">Add Todo</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
