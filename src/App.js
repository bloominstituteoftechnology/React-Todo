import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm';
import Key from './components/TodoComponents/Key';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
     
        <div class="body">
          <h1>My tasks</h1>
          
          <div class ="content">
          <Key />
          <TodoForm />
        
          </div>
          </div>
        
    );
  }
}

export default App;
