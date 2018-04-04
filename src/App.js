import React, { Component } from 'react';
import { render } from 'react-dom';
import ToDoList from "./components/ToDoList"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  background: "#d9eef7",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      newToDo: "",
      toDos: ["Finish Project", "Review", "Walk Dog", "Relax", "Sleep"]
    };
  }

  handleAddToDo = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmitToDo = () => {
    const { toDos } = this.state;
    toDos.push(this.state.newToDo);
    this.setState({ toDos, newToDo: "" });
  }

  render() {
    return (
      <div style={styles}>
        <h1>Kaitlyn's To Do List</h1>
          <ToDoList {...this.state}/>
        <input 
          type="text" 
          name="newToDo" 
          value={this.state.newToDo} 
          placeholder="Add Task"
          onChange={this.handleAddToDo}
        />
        <button onClick={this.handleSubmitToDo}> Add Task </button>
      </div>
    );
  }

}

export default App;
