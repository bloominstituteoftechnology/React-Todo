import React from 'react';

import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import Moment from 'moment';
import Fuse from 'fuse.js';

class App extends React.Component {
  constructor() {
    super();

    this.todos = JSON.parse(localStorage.getItem("todos")) || [
      {
        _id: "1528817077286",
        dateCreated: Moment().format("MMMM D, YYYY - LT"),
        task: "Add some todos!",
        completed: false
      }
    ];
    this.state = {
      todos: this.todos,
      queriedTodos: this.todos,
      currentTodoInput: "",
      searchQuery: ""
    }

    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  addTodo(e) {
    if (this.state.currentTodoInput) {
      const todos = [...this.state.todos, {
        _id: String(Date.now()),
        dateCreated: Moment().format("MMMM D, YYYY - LT"),
        task: this.state.currentTodoInput,
        completed: false,
      }];

      this.setState({ 
          todos,
          queriedTodos: todos,
          currentTodoInput: "",
          searchQuery: ""
      }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)));
    }
  }

  searchTodos(searchQuery) {
    this.setState({
      queriedTodos: searchQuery === "" ? this.state.todos : new Fuse(this.state.todos, {
        threshold: 0.1,
        location: 0, 
        keys: ["task"]
      }).search(searchQuery)
    });
  }

  toggleCompletedTodo(e) {
    const queriedTodos = this.state.queriedTodos;
    for (let i = 0; i < queriedTodos.length; i++) {
      if (queriedTodos[i]._id === e.currentTarget.dataset.id) {
        queriedTodos[i].completed = !queriedTodos[i].completed;
        break;
      }
    }

    this.setState({
      queriedTodos
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)));
  }

  removeCompletedTodos(e) {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed),
      queriedTodos: this.state.queriedTodos.filter(todo => !todo.completed)
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)));
  }

  handleKeyDown = e => {
    if (e.keyCode === 13 || e.which === 13) {
      e.stopPropagation();
      e.preventDefault();
      e.currentTarget.value = "";

      const input = e.currentTarget.dataset.input;

      switch(input) {
        case 'new-todo-textarea' :
          this.addTodo(e)
          break;
      }
    }
  }

  handleChange = e => {
    const input = e.currentTarget.dataset.input;
    
    switch(input) {
      case 'new-todo-textarea' :
        this.setState({currentTodoInput: e.currentTarget.value});
        break;
      case 'todo-search' :
        this.setState({searchQuery: e.currentTarget.value});
        this.searchTodos(e.currentTarget.value);
        break;
    }
  }

  handleClick = e => {
    const button = e.currentTarget.dataset.button;
    switch(button) {
      case 'todo-add' :
        this.addTodo(e);
        break;

      case 'toggle-completed' :
        this.toggleCompletedTodo(e);
        break;

      case 'remove-completed-todos' :
        this.removeCompletedTodos(e);
        break;
    }
  }

  render() {
    return (
      <div className="todo-app">
        <h1 className="todo-main-header">Todo App</h1>
        <TodoForm 
          currentTodoInput={this.state.currentTodoInput}
          handleChange={this.handleChange}
          handleKeyDown={this.handleKeyDown}
          handleClick={this.handleClick} />
        <TodoList 
          todoList={this.state.queriedTodos}
          handleChange={this.handleChange}
          handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
