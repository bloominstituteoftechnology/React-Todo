import React from "react";
import ToDoList from "./components/TodoComponents/TodoList.js";
import ToDoForm from "./components/TodoComponents/TodoForm.js";

export default class App extends React.Component {
  constructor() {
    super(); // let's us access lifecycle methods (hooks)
    this.state = {
      todo: [],
      inputText: ""
    };
  }

  // property
  addToDo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todo: [...this.state.todo, this.state.inputText],
        inputText: ""
      });
    }
  };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  // form is called controlled component (vs. uncontrolled)
  render() {
    // this is a lifecycle hook
    return (
      <div>
        <ToDoList todos={this.state.todo} />
        <ToDoForm
          addToDo={this.addToDo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}
