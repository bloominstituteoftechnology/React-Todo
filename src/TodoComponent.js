import React, { Component } from "react";

class TodoComponent extends Component {
  constructor() {
    super();

    this.state = {
      ToDo: ["flour", "eggs", "milk", "sugar", "vanilla"],
      newToDo: ""
    };
  }

  handleInput = event => {
    console.log("event.target.value", event.target.value);
    this.setState({ newToDo: event.target.value });
  };

  addToDo = event => {
    event.preventDefault();
    const ToDoList = this.state.ToDo;
    ToDoList.push(this.state.newToDo);
    this.setState({
      newToDo: "",
      ToDo: ToDoList
    });
  };

  render() {
    return (
      <div>
        {this.state.ToDo.map(item => <div>{item}</div>)}
        <form onSubmit={this.addToDo}>
          <input
            type="text"
            onChange={this.handleInput}
            placeholder="Add a new item"
            value={this.state.newToDo}
          />
        </form>
      </div>
    );
  }
}

export default TodoComponent;