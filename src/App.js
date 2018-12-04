import React from "react";
import ToDoList from "./components/TodoComponents/TodoList.js";
import { AddButton } from "./components/TodoComponents/TodoForm.js";
import { Input } from "./components/TodoComponents/TodoForm.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      currentInput: ""
    };
  }

  updateState = () => {
    let toDoList = this.state.list.slice();
    let currInput = this.state.currentInput;
    toDoList.push({
      task: currInput,
      id: Date.now(),
      completed: false
    });
    this.setState({ list: toDoList });
  };

  captureInput = () => {
    this.setState({ currentInput: event.target.value });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <ToDoList state={this.state.list} />
        <Input input={this.captureInput} />
        <AddButton update={this.updateState} />
      </div>
    );
  }
}

export default App;
