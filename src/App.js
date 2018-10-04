import React, { Component } from 'react';
import { EventEmitter } from './utils';

import TodoList from './components/TodoComponents/todoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };
    EventEmitter.subscribe('toggleTodo', id => this.toggleTodo(id));
  }

  addTodo = input => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: input,
          id: Date.now().toString(),
          completed: false
        }
      ]
    });
  }

  toggleTodo = id => {
    this.setState({
      todoList: this.state.todoList.map(
        todo =>
          todo.id === id ? Object.assign(todo, { completed: !todo.completed }) : todo
      )
    });
  }

  clear = () => {
    this.setState({ todoList: this.state.todoList.filter(todo => !todo.completed) });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todoList={this.state.todoList} />
        <TodoForm handleSubmit={this.addTodo} clear={this.clear} />
      </div>
    );
  }
}

export default App;
