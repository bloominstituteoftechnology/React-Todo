/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import ToDoList from './components/toDo';
// You'll want to import the necessary components you want the App component to render

// const App = () => (
//    {/* Replace this div with whatever components you want the App root component to render */}
//    <div>Hello World!</div> 
// );

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
    let chore = this.state.newToDo;
    const toDoList = this.state.toDoList;
    toDoList.push(chore);
    this.setState({ toDoList, newToDo: '' });
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <ToDoList
          chore={this.state.newToDo}
          changeHandler={this.handleNewToDo}
          addTo={this.handleAddNewToDo}
          toDoList={this.state.toDoList}
        />
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
