import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: {}
    };
  }

  handleOnChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    if (this.state.newTodo !== '') {
      const todoList = this.state.todos;
      todoList.push({ text: this.state.newTodo, completed: false });
      this.setState({
        newTodo: { text: '', completed: false },
        todos: todoList
      });
    }
  };

  deleteTodo = index => {
    const todoList = this.state.todos;
    console.log(todoList, index);
    todoList.splice(index, 1);
    this.setState({
      newTodo: {},
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
            value={this.state.newTodo.text}
          />
          <button type="submit" onClick={this.addTodo}>
            Add Todo Item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoList;
