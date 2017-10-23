/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import toDoList from './toDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoInput = '',
      toDoList = [];
    };
    this.handleToDo = this.handleToDo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleToDo () {
    this.setState({ toDoInput: event.target.value });
  }
  handleAddToDo(event) {
    this.state.toDoList.push(this.state.toDoInput);
    this.setState{( toDoList, toDoInput: '' )}
  }
  render() {
    return (
      <toDoList
        changeHandler = {}
        addToDo = {}
        toDoItem = {}
      />
    )
  }
}

export default App;
