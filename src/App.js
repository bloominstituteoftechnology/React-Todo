import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      id: Date.now(),
      completed: false,
      inputText: ''
    };
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        id: Date.now(),
        todos: [
          ...this.state.todos,
          {
            inputText: this.state.inputText,
            id: this.state.id,
            completed: this.state.completed
          }
        ],
        inputText: ''
      });
    }
  };

  clearCompleted = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        id: Date.now(),
        todos: [],
        inputText: ''
      });
    }
  };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    return (
      <div className="todos-container">
        <h2>Todo App:</h2>
        <TodoList todos={this.state.todos} />
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
