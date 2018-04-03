import React, { Component } from 'react';
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  render() {
    return (
      <div>
        <form onSubmit= {this.newTodo}>
        <input type="text" 
        placeholder="You knew new todo, for new you" 
        value= { this.state.newTodo }
        onChange = { this.handleChange } />
        </form>
        </div>
    )
  }
}

export default TodoList;
