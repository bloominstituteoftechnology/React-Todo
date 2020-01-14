import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js'
import TodoList from './components/TodoComponents/TodoList.js'
import './components/TodoComponents/Todo.css';

const todoArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'More Cookies',
    id: 1528817084359,
    completed: true
  }
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      todosList: todoArray,
    };
  }

  addTodo = task => {
    this.setState({
      todosList: [...this.state.todosList, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    });
  };

  filterCompleted = () => {
    this.setState({
      todosList: this.state.todosList.filter(todo => {
        return !todo.completed;
      })
    });
  }

  toggleCompleted = (id) => {
    this.setState({
      todosList: this.state.todosList.map(todo => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todosList={this.state.todosList}
          toggleCompleted={this.toggleCompleted} />
        <TodoForm addTodo={this.addTodo} filterTodos={this.filterCompleted} />
      </div>
    );
  }

}
export default App;