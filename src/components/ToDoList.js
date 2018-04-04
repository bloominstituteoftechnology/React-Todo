import React, { Component } from 'react';
import ToDo from "./ToDo";

class ToDoList extends Component {
    constructor() {
      super();
      this.state = {
        newToDo: "",
        toDos: ["Finish Project", "Review", "Relax", "Sleep" ]
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
  
    handleEnter = e => {
      if(e.key === 'Enter'){
        const { toDos } = this.state;
        toDos.push(this.state.newToDo);
        this.setState({ toDos, newToDo: "" });
      }
    }
  
    render() {
      return (
        <div className="container">
          <h1>Here is The ToDo List</h1>
            <ToDo {...this.state}/>
          <input 
            type="text" 
            name="newToDo" 
            className="input"
            value={this.state.newToDo} 
            placeholder="Add Task"
            onChange={this.handleAddToDo}
            onKeyPress={this.handleEnter}
          />
          <button className="button" onClick={this.handleSubmitToDo}> Add Task </button>
        </div>
      );
    }
  
  }

export default ToDoList;