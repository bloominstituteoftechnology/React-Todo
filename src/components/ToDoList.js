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
      toDos.push(this.toUpper(this.state.newToDo));
      this.setState({ toDos, newToDo: "" });
    }
  
    handleEnter = e => {
      if(e.key === 'Enter' && this.state.newToDo !== ""){
        const { toDos } = this.state;
        toDos.push(this.toUpper(this.state.newToDo));
        this.setState({ toDos, newToDo: "" });
      }
    }

    toUpper = str => {
      return str
      // .toLowerCase()  // this is if u want to prevent all caps
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substr(1) )
      .join(' ');
    }
  
    render() {
      return (
        <div className="container">
          <h1>Here is The ToDo List</h1>
          <div className="rows">
            <ToDo {...this.state}/>
          </div>
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