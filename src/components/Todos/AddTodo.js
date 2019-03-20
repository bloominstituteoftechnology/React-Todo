/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

export default class AddTodo extends Component {
  state = {
    title: '',
  };

  // * On Submit
  onSubmit = e => {
    e.preventDefault();
    if (this.state.title !== '') this.props.addTodo(this.state.title);
    else console.log('Todo is blank :-(');
    this.setState({ title: '' });
  };

  // * On Change
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="form container"
        style={formStyle}
      >
        <input
          name="title"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
          className="input"
        />
        <input
          type="submit"
          value="submit"
          className="button is-success"
          style={{ marginLeft: '1rem' }}
        />
      </form>
    );
  }
}

const formStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '1rem 0',
};
