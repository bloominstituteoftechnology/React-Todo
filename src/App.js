//All of your application data will be stored here
//All of your handler functions should live here

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
let data = [];
// design `App` to be the parent component of your application.
class App extends React.Component {
  //store your state in this component.
  constructor(){
    super();
    this.state = {
      task: "",
      id: 1,
      completed: false,
    }
  }
  // this component is going to take care of state, and any change handlers you need to work with your state
  //handle input takes the input provide in the box and changes the state to reflex that text
  handleInput = (event) => {
    this.setState({
      task: event.target.value,
    });
  }

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
      task: this.state.task,
      id: Date.now(),
    })
    data.push(this.state)
    //data.push([this.state.id, this.state.task, this.state.completed])
  }
  removeCompleted(){
    console.log("cleared")
  }
  render() {
    return (
      <TodoList state={data} input={this.handleInput} add={this.addTodo} remove={this.removeCompleted}/>
    );
  }
}

export default App;