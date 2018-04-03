import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newToDo: "",
      toDos: ["Finish Project", "Review", "Walk Dog", "Sleep", "Relax"]
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
      <div>
        <h2>Kaitlyn's To Do List</h2>

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
