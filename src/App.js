import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { timingSafeEqual } from 'crypto';

class App extends React.Component {
  constructor () {
    super ();
    this.state = [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      }
    ];
  }
  addToDo = (event) => {
    event.preventDefault()
    console.log('addToDo')
  }
  
  clearComplete = (event) => {
    event.preventDefault()
    console.log('complete')
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoForm task = {this.state[0].task}
        addToDo = {this.addToDo} 
        clearComplete= {this.clearComplete}/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
