import React, { Component } from "react";
// import TodoList from "./components/TodoList";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
        clicked: true
    };
  }
  Clicked = () => {
    this.setState({ clicked: 
    !this.state.clicked })
  };

  render() {
      const crossed = this.state.clicked ? 
      {textdecorationline: 'underline line-through'} : {textdecorationline: 'none'};
      return (
      <div onClick= {this.Clicked}>
      {this.props.Todo}
      </div>)
  }
  

}


export default Todo;
