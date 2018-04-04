import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoList from './TodoList';

const centerText = {
  textAlign: "center"
};

class App extends Component {
  constructor(options) {
    super(options);
    this.state = {
      newTodo: '',
      todos: ['starting item'],
      classes: [''],
    };
  }
  handleAddTodo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitTodo = () => {
    const { todos } = this.state;
    if (this.state.newTodo !== '') todos.push(this.state.newTodo);
    this.setState({ todos, newTodo: '' });
  };

  handleCheckTodo = e => {
    console.log('YOU CHECKED IT BRUV');
  }

  render() {
    console.log(this.state);
    return (
      <div style={centerText}>
        <TodoList
          {...this.state}
        />
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          placeholder="add todo"
          onChange={this.handleAddTodo}
        />
        <button onClick={this.handleSubmitTodo}>Add Todo</button>
      </div>
    );
  }
}

export default App;