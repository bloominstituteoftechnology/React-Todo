import React, { Component } from 'react';
import ToDoList from './ToDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoTask: '',
      removeTask: null,
      toDos: []
    };
    this.handletoDoTask = this.handletoDoTask.bind(this);
    this.handleAddTaskToList = this.handleAddTaskToList.bind(this);
  }

  handletoDoTask(event) {
    this.setState({toDoTask: event.target.value});
  }

  handleAddTaskToList() {
    let todo = this.state.toDoTask;
    const toDos = this.state.toDos;
    toDos.push(todo);
    this.setState({ toDos, toDoTask: '' });
  }

  // handleRemoveTaskFromList() {
  //   const toDos = this.state.toDos;
  //   toDos.splice(i, 1);
  // }

  render() {
    return (
      <ToDoList
        changeHandler={this.handletoDoTask}
        addToList={this.handleAddTaskToList}
        task={this.state.toDoTask}
        toDos={this.state.toDos}
      />
    );
  }
}

export default App;