import React from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList.js';
import Todo from './components/TodoComponents/Todo.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        {
          task: 'Sample task',
          id: 1528817077286,
          completed: false
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
