import React, {Component} from 'react';
import TodoInput from './TodoInput';
import List from './List';

class TodoApp extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      todos: [],
      text: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text) return;
    const newTodo = {
      text: this.state.text,
      id: Date.now(),
      isCompleted: false
    };

    this.setState({todos: [...this.state.todos, newTodo], text: ''});
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  toggleTodo(task) {
    const todos = this.state.todos;
    todos.forEach((todo) => {
      if(todo.id === task.id) todo.isCompleted = !todo.isCompleted;
    });

    this.setState({todos});
  }

  removeTodo(task) {
    let todos = this.state.todos;

    todos = todos.filter(todo => todo.id !== task.id);

    this.setState({todos});
  }

  render() {
    return (
      <div className="todo-app">
        <div className="todo-header">
          <h1 className="todo-header-text">Todo List</h1>
        </div>
        <TodoInput
          todoText={this.state.text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
        <List
          removeTodo={this.removeTodo}
          handleToggle={this.toggleTodo}
          todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoApp;
