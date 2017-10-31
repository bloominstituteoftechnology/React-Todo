/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';
// You'll want to import the necessary components you want the App component to render
import ToDo from './components/toDo';


class App extends Component {
  constructor() {
    super();
    this.state = {
      newToDo: '',
      toDoList: []
    };
    this.handleNewToDo = this.handleNewToDo.bind(this);
    this.handleAddNewToDo = this.handleAddNewToDo.bind(this);
  }

  handleNewToDo(event) {
    this.setState({ newToDo: event.target.value });
  }

  handleAddNewToDo() {
    let removeOldString = this.state.newToDo;
    let choreObj = {'text' : this.state.newToDo, 'completed' : false};
    const toDoList = this.state.toDoList;
    toDoList.push(choreObj);
    this.setState({ toDoList, newToDo: '' });
    console.log(this.state.toDoList);
  }
render() {
    return (
      <div>
        <h1>To Do List</h1>
        <ToDo
          removeOldString={this.state.newToDo}
          changeHandler={this.handleNewToDo}
          addToList={this.handleAddNewToDo}
          toDoList={this.state.toDoList}
          checkHandler={this.handleClickItem}
        />
      </div>

    );
  }
}

render(<App />, document.getElementById('root'));