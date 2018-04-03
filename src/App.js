import React, { Component } from 'react';
import { render } from 'react-dom';
import ToDoList from "./components/ToDoList"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      newToDo: "",
      toDos: ["Finish Project", "Review", "Sleep", "Relax"]
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
        <h1>Here is The ToDo List</h1>
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
