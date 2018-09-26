import React from 'react';
import "./components/TodoComponents/Todo.css"
import Todo from "./components/TodoComponents/Todo.js"
import TodoForm from "./components/TodoComponents/TodoForm.js"
import TodoList from "./components/TodoComponents/TodoList.js"
let todoArray = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(description) {
    super(description);
    // set our default state
    this.complete = false;
    this.description = description;
    this.id = Date.now()
    this.state = {    }
    this.handleClick = this.handleClick.bind(this);
    
  }
}      
  App.prototype.completeToDo = function() {
    App.complete = true;
 

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
          <div className="todoList">
          <ul className="ul">
          <li className="li"><Todo />


      </div>
    );
  }
}

export default App;
