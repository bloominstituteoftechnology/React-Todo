/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import toDoList from './toDoList';
// You'll want to import the necessary components you want the App component to render

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoList = [];
    };

  }
  handleToDo () {
    
  }
  handleAddToDo(event) {

  }
  render() {
    return (
      // <div>
      //   <ul>
      //     <li>Walk the dog</li>
      //     <li>Buy Groceries</li>
      //     <li>Rob a bank</li>
      //   </ul>
      // </div>
      < toDoList
      changeHandler = {}
      addToDo = {}
      toDoItem = {}
    )
  }
}

// const App = () => (
//    {
//      <div>Hello World!</div>
//    }
// );

render(<App />, document.getElementById('root'));
