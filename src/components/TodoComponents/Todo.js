import React from 'react';
import "./Todo.css"
import TodoForm from "./TodoForm"



class Todo extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(props) {
      super(props);
      // set our default state
      this.complete = false;
      this.description = description;
      this.id = Date.now()
      this.state = {    }
      this.handleClick = this.handleClick.bind(this);
      
    }
  }      
    Todo.prototype.completeToDo = function() {
      Todo.complete = true;