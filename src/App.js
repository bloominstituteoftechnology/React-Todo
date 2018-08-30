import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: ''
    };
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      const todos = this.state.todos.slice();
      todos.push({
        task: this.state.inputText,
        completed: false,
        id: Date.now()
      });
      this.setState({ todos, inputText: '' });
    }
  };

  handleInput = event => this.setState({ inputText: event.target.value });

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

  clearCompleted = event => {
    event.preventDefault();
    if (this.state.todos) {
      let todos = this.state.todos.slice();
      todos = todos.filter(todo => !todo.completed);
      this.setState({ todos });
      this.setState({
        id: Date.now(),
        todos: [],
        inputText: ''
      });
    }
  };

  render() {
    return (
      <div className="app-container">
        <h2 class="app-name">Todo App:</h2>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
