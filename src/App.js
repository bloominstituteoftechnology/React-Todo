import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // Your todo data should be an array of objects that look a lot like this:
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }

  addTodo = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  }

  changeTodo = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  render() {
    return (
      <div>
        <h2>Todo List:</h2>
        <div className="todo-form">
        <TodoForm stateValue={this.state.todo} handleTodoChange={this.changeTodo} handleAddTodo={this.addTodo} handleClearTodos={this.clearCompletedTodos} />
        </div>
        <div className="todo-list">
        <TodoList handleToggleComplete={this.toggleTodoComplete} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
