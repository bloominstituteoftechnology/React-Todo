// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';


class TodoList extends Component {
  constructor () {
    super();
    this.state = {
      todos: ['Task 1','Task 2'],
      newTodo: ''
    };
  }

  handleSubmitTodo = () => {
    const newTodos = this.state.todos;
    newTodos.push(this.state.newTodo);
    this.setState({ todos: newTodos, newTodo: "" });
  };

  handleNewTodo = event => {
    this.setState({ newTodo: event.target.value });
  };

  render () {
    console.log("rendering");
    return (
      <div>
	<input
	  name="newTodo"
	  onChange={this.handleNewTodo}
	  value={this.state.NewTodo}
	  placeholder="add todo here"
	/>
      </div>
    );
  };
  
};

export default TodoList;
