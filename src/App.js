import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: '',
          id: '',
          completed: false
        },
      ],
      todo: ''
    };
  }

  addTodo = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  changeTodo = event => this.setState({ [event.target.name]: event.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } 
      else { return todo; }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  // handleInput = event => {
  //   this.setState({
  //     inputText: event.target.value
  //   });
  // };

  render() {
    return (
      <div class="output-text">
       <h1 class="header">Daily To-do List</h1>
        <TodoList handleToggleComplete={this.toggleTodoComplete}
        todos={this.state.todos} 
        />
        <TodoForm
           value={this.state.todo}
           handleTodoChange={this.changeTodo}
           handleAddTodo={this.addTodo}
           handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;