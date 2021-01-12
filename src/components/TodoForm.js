import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    input: "",
  };
handleChange = e => {
    this.setState({
        input: e.target.value
    })
}

handleSubmit = e => {
      e.preventDefault()
    this.setState({
        input: e.target.value
    })
}
  render() {
    
    return (
      <form className="todo-form" onSumbit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          onChange={this.handleChange}
          value={this.state.input}
          name="text"
          className="todo-input"
        />
        <button className='todo-button'>Add Todo</button>
      </form>
    );
  }
}
