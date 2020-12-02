import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
  }

  changeHandler = e => {
    this.setState({ todoName: e.target.value });
    console.log(this.state);
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(e, this.state.todoName);
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          onChange={this.changeHandler}
          type="text"
          name="todo"
          placeholder="Items"
          value={this.state.todo}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
