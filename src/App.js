import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
   super();
   this.state = {
    date: ""
   } 
  }

  render() {
    return (
      <div>
      <TodoList />
      <TodoForm />
      </div>
    );
  }
}

export default App;
