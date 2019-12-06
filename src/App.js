import React from 'react';
import { chores } from './data';
import TodoList from '../src/components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    // the constructor intializes all of the properties and methods in App
    super();
    // super intializes all of the properties and methods in React Component
    this.state = {
      chores: chores
    }; 

  }

  render() {
    return (
      <div>
          <TodoList chore={this.state.chores}/>
      </div>
    );
  }
}

export default App;
