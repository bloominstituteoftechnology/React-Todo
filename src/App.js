import React from 'react';

import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [
        {
          _id: "1528817077286",
          task: 'Organize Garage',
          completed: false
        },
        {
          _id: "1528817084358",
          task: 'Bake Cookies',
          completed: false
        }
      ],
      currentTodoInput: ""
    }

    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  addTodo(e) {
    this.setState({ 
        todos: [...this.state.todos, {
          id: String(Date.now()),
          task: this.state.currentTodoInput,
          completed: false,
        }],
        currentTodoInput: ""
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)));
  }

  toggleCompletedTodo(e) {
    const todoList = this.state.todos;
    
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i]._id === e.currentTarget.dataset.id) {
        todoList[i].completed = !todoList[i].completed;
        break;
      }
    }

    this.setState({
      todos: todoList
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)));
  }

  handleChange = e => {
    const input = e.currentTarget.dataset.input;
    
    switch(input) {
      case 'new-todo-textarea' :
        this.setState({currentTodoInput: e.currentTarget.value});
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
    }
  }

  render() {
    return (
      <div className="todo-app">
        <h1 className="todo-main-header">Todo App</h1>
        <TodoForm 
          currentTodoInput={this.state.currentTodoInput}
          handleChange={this.handleChange}
          handleClick={this.handleClick} />
        <TodoList 
          todoList={this.state.todos}
          handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
