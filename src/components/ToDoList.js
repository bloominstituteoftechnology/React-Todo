import React, { Component } from 'react';
import Todo from './Todo';

class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      toDos: [],
      newToDo: ''
    };
  }
  handleToDos = (event) => {
    this.setState( { newToDo: event.target.value } );
  };

  addToDos = (event) => {
    event.preventDefault();
    const toDoList = this.state.toDos;
    toDoList.push(this.state.newToDo);
    this.setState({
      newToDo: '',
      toDos: toDoList
    });
  };

  render() {
    return (
      <div>
      {this.state.toDos.map( (toDos, i) => <div key={i}>{toDos}</div>)}
      <form onSubmit={this.addToDos}>
        <input onChange={this.handleToDos} placeholder="Add new To Do!" value={this.state.newToDo} />
      </form>
    </div>
    );
  }
}

export default ToDoList;