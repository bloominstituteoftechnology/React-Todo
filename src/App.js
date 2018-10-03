import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  //#region you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  //#endregion this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state={
      goals: [],
      temp: "",
      message: ""
    };
  }

  inputFunction = (event) => {
    this.setState({temp: event.target.value});//store input in temporary space.
  }

  addTodoFunction = (event) => {
    event.preventDefault();
    const task  = {
    name: this.state.temp,
    id: Date.now(),
    completed: false
  }

  this.state.goals.push(task);
}

  render() {
    return (
    <div>

      <div className="display">
        <h1>Just Do It! {this.state.message} <span>the list.</span></h1>
        <hr/> 
        
        <div className="list">
          <TodoForm inputHandler={this.inputFunction} clickHandler={this.addTodoFunction}/>
          <h2 className="goals">Goals</h2>
          <div className="list_items"><TodoList todos={this.state.goals}/></div>
        </div>
      </div>

    </div>
    );
  }
}
export default App;
