import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        {
          task: 'Sample task',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Sample task 2',
          id: 1528817077286,
          completed: false
        }
      ]
    };
  }

  // handlers here

  render() {
    return (
      <div className='app-container'>
        <h1>Todo List</h1>
        <TodoList todoData={this.state.todoData} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
