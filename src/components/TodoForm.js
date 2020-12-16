import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ textInput: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.textInput);
    this.setState({
      textInput: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input
              value={this.state.textInput}
              onChange={this.handleChanges}
              type='text'
              placeholder='...todo'
            />
          </label>
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
