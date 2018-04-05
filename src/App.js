import React, { Component } from 'react';
import ToDoList from "./ToDoList.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// I'll apply this line when I figure out how...
// const strikeStyle = {
//   textDecorationLine: 'line-through'
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      newToDo: "",
      toDos: [],
      strike: []
    };
  }

  handleAddToDo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitToDo = () => {
    const { toDos } = this.state;
    toDos.push(this.state.newToDo);
    this.setState({ toDos, newToDo: "" });
    this.state.strike.push(false);
  };

  handleStrike = () => {

  }

  render() {
    return (
      <div style={styles}>
        <h2>ToDo List</h2>
        <input
          type="text"
          name="newToDo"
          value={this.state.newToDo}
          placeholder="add ToDo"
          onChange={this.handleAddToDo}
        />
        <button onClick={this.handleSubmitToDo}>Add ToDo</button>
        <ToDoList {...this.state} />
        <div className="listOfTodos"/>
      </div>
    );
  }
}
export default App;
