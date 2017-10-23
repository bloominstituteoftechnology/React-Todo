// JavaScript source code

import React, { Component } from 'react';
import ToDoList from './ToDoList';

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      toDo: '',
      toDoItems: []
    }
    this.handleToDo = this.handleToDo.bind(this);
    this.handleAddItemToList = this.handleAddItemToList.bind(this);
  }
  handleToDo(event) {
    this.setState({ toDo: event.target.value });
  }
  handleAddItemToList() {
    let toDo = this.state.toDo;
    const toDoItems = this.state.toDoItems;
    toDoItems.push(toDo);
    this.setState({ toDoItems, toDo: '' });
  }
  render() {
    return (
      <ToDoList
        changeHandler={this.handleToDo}
        addToList={this.handleAddItemToList}
        name={this.state.toDo}
        toDoItems={this.state.toDoItems}
      />
    );
  }
}

export default ToDo;