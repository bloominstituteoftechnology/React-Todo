import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  pressEnter(e) {
    let key = e.keyCode || e.which;
    if (key === 13) {
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;
    if (input.length > 0) {
      this.props.onSubmit(input);
      this.setState({ input: '' });
    }
  }

  render() {
    const { input } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="...todo"
          value={input}
          onChange={this.handleChange}
          onKeyPress={input.length < 1 ? null : this.pressEnter}
        />
        <button type="submit">Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
