import React from 'react';
import TodoList from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'

import './App.css'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todos: [
        {
          task: 'take out trash',
          id: 123,
          completed: false
        }
      ],
      todoText: ''
    }
  }
  
  render() {
    return (
      <div className="app-container">
        <TodoList todos={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
