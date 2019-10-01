import React from "react";


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addToDo(this.state.toDo);
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          value={this.toDo}
          name="name"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;