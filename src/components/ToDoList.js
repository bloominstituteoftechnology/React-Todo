import React, { Component } from 'react';
import ToDo from "./ToDo";

class ToDoList extends Component {
    constructor() {
      super();
      this.state = {
        newToDo: "",
        toDos: []
      };    
    }

    componentDidMount() {
      console.log('cdm called');
      const initialTodos = JSON.parse(localStorage.getItem('todos'));
      console.log('initial totods', initialTodos);
      this.setState({ toDos: initialTodos});
      console.log('state', this.state)
    }

    persistTodos = () => {
      const { toDos } = this.state;
      console.log('todos', toDos);
      localStorage.setItem('todos', JSON.stringify(toDos));
    }

    handleAddToDo = e => {
      this.setState({ [e.target.name]: e.target.value});
    }
  
    handleSubmitToDo = e => {
      e.preventDefault();
      if (this.state.newToDo.trim() !== "") {
        const { toDos } = this.state;
        toDos.push({text: this.toUpper(this.state.newToDo), complete: false});
        this.persistTodos();
        this.setState({ toDos, newToDo: "" });
      }
    }

    completeToDo = done => {
      const { toDos } = this.state;
      toDos.forEach(toDo => {
        if(toDo.text === done.text) toDo.complete = !done.complete;
      })
      this.persistTodos();
      this.setState({ toDos });
    }

    clearToDO = () => {
      const { toDos } = this.state;
      const incomplete = toDos.filter(toDo => toDo.complete === false )
      this.setState({ toDos: incomplete });
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
      console.log('render called');
      return (
        <div className="container">
          <h1>Here is The ToDo List</h1>
          <div className="rows">
            <ToDo clearToDo={this.clearToDo} completeToDo={this.completeToDo} toDos={this.state.toDos}/>
          </div>
          <form className="form" onSubmit={this.handleSubmitToDo}>
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
          <button className="button clear" onClick={this.clearToDO}>Clear Completed</button>
          <button className="button save" onClick={this.persistTodos}>Save</button>
        </div>
      );
    }
  
  }

export default ToDoList;