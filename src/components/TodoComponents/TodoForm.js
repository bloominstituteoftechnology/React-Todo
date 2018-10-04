import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    if (input.length > 0) {
      this.props.handleSubmit(input);
      this.setState({ input: '' });
    }
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  pressEnter = e => {
    let key = e.keyCode || e.which;
    if (key === 13) {
      this.handleSubmit(e);
    }
  };

  handleClick = () => {
    this.setState({ input: '' });
    this.props.clear();
  };

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
        <button onClick={this.handleClick}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
