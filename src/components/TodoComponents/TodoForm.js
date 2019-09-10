import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todoName: ''
    };
  }
  handleChanges = e => {
    this.setState({ todoName: e.target.value });
    console.log('HandleChange:', this.state.todoName);
  };

  handleSubmit = e => {
    this.props.addItem(e, this.state.todoName);
    this.setState({ todoName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='item'
          value={this.state.todoName}
          onChange={this.handleChanges}
        />

        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
