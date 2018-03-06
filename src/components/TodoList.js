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

  deleteTodo = index => {
    const todoList = this.state.todos;
    // const idx = todoList.indexOf(index);
    console.log(todoList, index);
    todoList.splice(index, 1);
    this.setState({
      newTodo: '',
      todos: todoList
    });
  };

  render() {
    const pointer = this;
    return (
      <div>
        {this.state.todos.map((newTodo, i) => (
          <Todo
            key={i}
            index={i}
            todo={newTodo}
            delTodo={this.deleteTodo}
            parent={pointer}
          />
        ))}
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
