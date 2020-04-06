import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewItem(this.state.task);
    this.setState({ task: "" });
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
