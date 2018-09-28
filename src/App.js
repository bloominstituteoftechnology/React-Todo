//All of your application data will be stored here
//All of your handler functions should live here
//Design `App` to be the parent component of your application.

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

//empty arr to hold state data
let data = [];

class App extends React.Component {
  //storeed state in component
  constructor(){
    super();
    this.state = {
      task: "",
      id: Date.now(),
      completed: false,
    }
  }
  //handle input takes the input provide in the box and changes the state to reflex that text
  handleInput = (event) => {
    this.setState({
      task: event.target.value,
    });
  }

  //handles add todo button
  addTodo = (event) => {
    event.preventDefault();
    this.setState({
      task: this.state.task,
      id: Date.now(),
    })
    data.push(this.state)
  }

  //strike through on click (doesn't work at the moment)
  strike = (event) =>{
    this.style.textDecoration = "line-through";
  }
  
  //handles clear completed button
  removeCompleted(){
    console.log("cleared")
  }
  render() {
    return (
      <TodoList values={data} input={this.handleInput} add={this.addTodo} remove={this.removeCompleted} strike={this.strike}/>
    );
  }
}

export default App;
