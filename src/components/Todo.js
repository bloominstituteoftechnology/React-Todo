import React, { Component } from 'react';

class Todo extends Component {

  constructor() {
    super();
    this.todo = "";
    this.completed = false;
  }

  add(newTodo) {
    this.todo = newTodo;
  }


  render(){
    return (
      <div style={{ textDecoration: (this.completed === true) ? "line-through" : "none"}} 
      data-index={this.props.index} onClick={this.props.onClick}>{this.props.todo}</div>
    );
  };

}

export default Todo;