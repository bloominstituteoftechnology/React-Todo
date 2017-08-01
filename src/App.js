import React, { Component } from 'react'; // Import React and also the Component property off of react. Put the Compotent property on it's own variable 'Component'.
import ToDoList from './ToDo';

class App extends Component { // My React component.
  render() {
    return ( // Can only return one element (nest divs).
      <div>
        <h1>To-Do List Creator</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;
