import React, { Component } from 'react';
import Todo from './Todo.js'

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  addTodo = (e) => {
    e.preventDefault();
    
    const todos = this.state.todos;
    todos.push(this.state.newTodo)

    this.setState({
      todos,
      newTodo: '',
    });
  }

  handleNewTodo = (e) => {
    const newTodo = {};
    newTodo.key = e.target.value.length;
    newTodo.text = e.target.value;
    newTodo.decoration = 'none';
    
    this.setState({ newTodo: newTodo.text });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleNewTodo} placeholder="Add new task" value={this.state.newTodo} />
          <button onClick={this.addTodo}>Submit</button>
        </form>
        {this.state.todos.map((todo, i) => {
          return <Todo key={i} todo={todo} />
        })}
      </div>
    );
  }
}

export default TodoList;