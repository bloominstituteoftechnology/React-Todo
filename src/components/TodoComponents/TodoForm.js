import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
    };
  }
  handleChange = e => {
    this.setState({
      newTodo: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log('Works');
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button>Add</button>
          <button onClick={this.props.clearTodos}>Clear Completed</button>
        </form>
      </div>
    );
  }
}
