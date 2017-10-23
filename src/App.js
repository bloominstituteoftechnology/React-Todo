import React, { Component } from 'react';
import TodoList from './TodoList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: '',
      todos: []
    };
    this.handleAddTodoToList = this.handleAddTodoToList.bind(this);
    this.handleTodoItem = this.handleTodoItem.bind(this);
  }

  handleTodoItem(event) {
    this.setState({ todoItem: event.target.value });
  }
  handleAddTodoToList() {
    let todo = this.state.todoItem;
    console.log(todo);
    const todos = this.state.todos;
    todos.push(todo);
    this.setState({ todos, todoItem: '' });
  }
  render() {
    return (
      <TodoList
        changeHandler={this.handleTodoItem}
        addToList={this.handleAddTodoToList}
        todo={this.todoItem}
        todos={this.state.todos}
      />
    );
  }
}
