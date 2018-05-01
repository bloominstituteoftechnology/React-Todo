import React, { Component } from 'react';
//import { render } from "react-dom";
import ToDoList from './list.js';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodoItem: "",
      toDos: ["test", "clear"]
    };
  }
  handleAddToDo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmitToDo = () => {
    const { toDos } = this.state;
    toDos.push(this.state.newTodoItem);
    this.setState({ toDos, newTodoItem: "" });
  };
  render() {
    return (
      <div style={styles}>
        <h2>ToDo List {"\u2728"}</h2>
        <ToDoList toDos={this.state.toDos} />
        <input
          type="text"
          name="newTodoItem"
          value={this.state.newTodoItem}
          placeholder="add todo"
          onChange={this.handleAddToDo}
        />
        <button onClick={this.handleSubmitToDo}>add todo</button>
      </div>
    );
  }
}

export default App;
