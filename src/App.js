import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Code React!',
          id: 10101010,
          completed: false
        }
      ],
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo],
      Todo: ''
    })
  }

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  todoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    })
    this.setState({ todos })
  }

  clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed)
    this.setState({ todos })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          handleComplete={this.todoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
