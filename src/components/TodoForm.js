import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  changeHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          value={this.state.inputValue}
          onChange={this.changeHandler}
          type='text'
          name='todo'
        ></input>
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
