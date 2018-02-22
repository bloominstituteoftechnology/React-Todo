import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  addTodo = (event) => {
    event.preventDefault();
    
    const list = this.state.todos;
    list.push(this.state.newTodo);

    this.setState({
      todos: list, 
      newTodo: "" 
    });    
  }

  createTodo = (event) => {
    event.preventDefault();

    this.setState({
      todos: this.state.todos,
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <div>
        {this.state.todos.map((thisTodo, i) => <Todo key={i} todo={thisTodo} />)}
        <form onSubmit={this.addTodo}>
          <input type="text" placeholder="Enter new Todo" onChange={this.createTodo} value={this.state.newTodo} />
        </form>
      </div>
    );
  }

}

export default TodoList;