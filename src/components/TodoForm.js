import React, { Component } from 'react';

export default class TodoForm extends Component {
  state = { todo: '' };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (this.state.todo) {
            this.props.addTodo(this.state.todo);
            this.setState({ ...this.state, todo: '' });
          }
        }}
      >
        <input
          type="text"
          id="todoInput"
          name="todo"
          placeholder="What do you need todo"
          value={this.state.todo}
          onChange={(e) =>
            this.setState({
              ...this.state,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input type="submit" value="Add Todo" />
        <button onClick={this.props.clearTodos}>Clear Completed Todos</button>
      </form>
    );
  }
}
