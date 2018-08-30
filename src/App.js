import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Sample task 1',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Sample task 2',
          id: 1528817084358,
          completed: true
        }
      ],
      inputText: ''
    };
  }

  inputChanged = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  submit = event => {
    event.preventDefault();
    if (this.state.inputText) {
      const todos = [...this.state.todos, {
          task: this.state.inputText,
          id: Date.now(),
          completed: false
        }]

      this.setState({
        todos: todos,
        inputText: ''
      });
    }
  };

  keyPress = event => {
    if(event.key === 'Enter'){
      this.submit();
    }
  };

  // Toggle todo.completed
  toggleCompleted = (event) => {
    const todos = [...this.state.todos];
    const todoIndex = todos.findIndex(
      (todo => todo.id === +event.target.id)
    );
    todos[todoIndex].completed = todos[todoIndex].completed ? false : true;

    this.setState({
      todos: todos
    });
  };

  // Remove all completed todos
  clear = (event) => {
    event.preventDefault();
    const todos = [...this.state.todos];
    this.setState({
      todos: todos.filter(todo => todo.completed === false)
    });
  };

  render() {
    return (
      <div className='app-container'>
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos}
                  toggleCompleted={this.toggleCompleted} />

        <TodoForm inputText={this.state.inputText}
                  inputChanged={this.inputChanged}
                  keyPress={this.keyPress}
                  submit={this.submit}
                  clear={this.clear} />
      </div>
    );
  }
}

export default App;
