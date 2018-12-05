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
    const input = document.querySelector("input");
    let toDoList = this.state.list.slice();
    let currInput = this.state.currentInput;
    if (input.value !== "") {
      toDoList.push({
        task: currInput,
        id: Date.now(),
        completed: false
      });
    }
    this.setState({ list: toDoList });
    input.value = "";
  };

  captureInput = () => {
    this.setState({ currentInput: event.target.value });
  };

  completed = event => {
    let theList = this.state.list.slice();
    theList.map(item => {
      if (event.target.innerText === item.task) {
        if (item.completed === false) {
          item.completed = true;
        } else {
          item.completed = false;
        }
      }
    });
    this.setState({ list: theList });
    console.log(this.state);
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div
        onKeyPress={event => {
          if (event.key === "Enter") {
            this.updateState();
          }
        }}>
        <h2>To Do List</h2>
        <ToDoList checked={this.completed} state={this.state.list} />
        <Input placeholder="Enter Your Task Here" input={this.captureInput} />
        <AddButton update={this.updateState} />
      </div>
    );
  }
}

export default App;
