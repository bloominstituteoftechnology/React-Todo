import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleOnChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    });
  };

  render() {
    return (
      <div>
        {this.state.todos.map((newTodo, i) => <Todo key={i} todo={newTodo} />)}
        <form>
          <input
            type="text"
            placeholder="Enter a Todo Item"
            onChange={this.handleOnChange}
            value={this.state.newTodo}
          />
          <button type="submit" onClick={this.addTodo}>
            Add a Todo
          </button>
        </form>
      </div>
    );
  }
}

export default TodoList;
