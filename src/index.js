import React, { Component } from "react";
import { render } from "react-dom";
import ToDoList from "./App";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      newToDo: "",
      toDo: []
    };
  }

  handleToDo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitToDo = () => {
    const { toDo } = this.state;
    toDo.push(this.state.newToDo);
    this.setState({ toDo, newToDo: "" });
  };

  render() {
    return (
      <div style={styles}>
        <h1>To Do List</h1>
        <ToDoList {...this.state} />
        <input
          type="text"
          name="newToDo"
          value={this.state.newToDo}
          placeholder="What Needs Done?"
          onChange={this.handleToDo}
        />
        <button onClick={this.handleSubmitToDo}>Add To List</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));