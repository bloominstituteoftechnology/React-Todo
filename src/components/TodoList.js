import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  handleInput = (event) => {
    this.setState({ newTodo: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.todos;
    if (!!this.state.newTodo) {
      todoList.push(this.state.newTodo);
    } else {
      alert("Please type in something!");
    }
    this.setState({
      newTodo: "",
      todos: todoList
    });
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo, i) => <Todo key={i} index={i} todo={todo} />)}
        <form>
          <input onChange={this.handleInput} placeholder="New Todo" value={this.state.newTodo}/>
          <button onClick={this.addTodo}>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoList;