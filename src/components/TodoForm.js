import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    }
  }
  changeHandler = e => {
      console.log(e.target.value)
    this.setState({ task: e.target.value });
  };

  submitTask = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ ...this.state, task: "" });
    
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.changeHandler}
        />
        <button type='submit'> + </button>
      </form>
    );
  }
}

export default TodoForm;