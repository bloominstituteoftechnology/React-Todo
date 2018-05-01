import React, { Component } from 'react';
import ToDoList from './TodoList.js'

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      title: 'i just want to see something',
      toDo: "",
      allToDos: [{item: 'delete full object when done', id: 'delete0'}]
    };
  }

  handleNameChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this)
  }

  handleSubmitToDo = () => {
    // create variable with current allToDos
    // create variable that grabs current value of toDo. you want this as an object with an id
    // push current toDo value to allToDos
    // setState
    const allToDos = this.state.allToDos;
    const toDo = { item: this.state.toDo, id: this.state.toDo + allToDos.length };
    this.state.allToDos.push(toDo);
    this.setState({ allToDos: allToDos, toDo: ""})
    // console.log(this)
  }


  render(){
    return (
      <div>
        <h2>{this.state.title}</h2>
        <ToDoList allToDos={this.state.allToDos} />
        <input
          name="toDo"
          onChange={this.handleNameChange}
          value={this.state.toDo}
          placeholder="Add ToDo"
        />
        <button onClick={this.handleSubmitToDo}>Add</button>
      </div>
    )
  }
}


export default Todo;