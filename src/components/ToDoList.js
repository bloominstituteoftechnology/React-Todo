import React, { Component } from 'react';
import ToDo from "./ToDo";

class ToDoList extends Component {
    constructor() {
      super();
      this.state = {
        newToDo: "",
        toDos: [{text: "Finish Project", complete: false} ,{text: "Review", complete: false} ,{text: "Relax", complete: false} ,{text: "Sleep", complete: false}]
      };    
    }
  
    handleAddToDo = e => {
      this.setState({ [e.target.name]: e.target.value});
    }
  
    handleSubmitToDo = e => {
      e.preventDefault();
      if (this.state.newToDo.trim() !== "") {
        const { toDos } = this.state;
        toDos.push({text: this.toUpper(this.state.newToDo), complete: false});
        this.setState({ toDos, newToDo: "" });
      }
    }
  
    // handleEnter = e => {
    //   if(e.key === 'Enter' && this.state.newToDo !== ""){
    //     const { toDos } = this.state;
    //     toDos.push(this.toUpper(this.state.newToDo));
    //     this.setState({ toDos, newToDo: "" });
    //   }
    // }

    completeToDo = e => {
      const { toDos } = this.state;
      toDos.forEach(toDo => {
        if(toDo.text === e.text) toDo.complete = !e.complete;
      })
      this.setState({ toDos });
    }

    clearToDO = e => {
      const { toDos } = this.state;
      const incomplete = toDos.filter(toDo => {
        toDo.complete === false;
      })
      this.setState({toDos});
    }

    toUpper = str => {
      return str
      .trim()
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
            <ToDo onComplete={this.completeToDo} {...this.state}/>
          </div>
          <form onSubmit={this.handleSubmitToDo}>
            <input 
              type="text" 
              name="newToDo" 
              className="input"
              value={this.state.newToDo} 
              placeholder="Add Task"
              onChange={this.handleAddToDo}
              // onKeyPress={this.handleEnter}
            />
            <button type="submit" className="button" onClick={this.handleSubmitToDo}> Add Task </button>
          </form>
        </div>
      );
    }
  
  }

export default ToDoList;