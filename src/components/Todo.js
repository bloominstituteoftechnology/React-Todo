import React, { Component } from 'react';
import ToDoList from './TodoList.js'

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Test',
      toDo: "",
      allToDos: []
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
    const toDo = { item: this.state.toDo, id: this.state.toDo + allToDos.length, click: false, };
    this.state.allToDos.push(toDo);
    this.setState({ allToDos: allToDos, toDo: ""})
    // console.log(this)
  }

  clicked = () => {
    this.setState({click: !this.state.allToDos.click})
    
    // let styled = this.allToDos[e].style;
    // if(styled === false){
    //   return styled = true;
    // }
    console.log(this.state.allToDos); 
    console.log('this was clicked')
  }

  render(){
    return (
      <div>
        <h2>{this.state.title}</h2>
        <div onClick={this.clicked}>
          <ToDoList allToDos={this.state.allToDos}/>
        </div>
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