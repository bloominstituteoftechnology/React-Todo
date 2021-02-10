import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ item: e.target.value });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.setState({ task: "" });
    this.props.addTask(this.state.item, e);
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.changeHandler}
        />
        <button> + </button>
      </form>
    );
  }
}
