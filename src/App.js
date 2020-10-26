import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

//Preset Task List
const list = [
  {
    name: 'Wakeup',
    id:'100',
    complete:false
  },
  {
    name: 'Drive to work',
    id:'101',
    complete:false
  },
  {
    name: 'Have lunch',
    id:'102',
    complete:false
  },
  {
    name: 'Schedule appointment',
    id: '103',
    complete:false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      list: list
    }
  }

  //Toggle Tasks
  handleToggleItem = (taskID)=>{
    this.setState({
      list: this.state.list.map(task=>{
        if(task.id === taskID){
          return {
            ...task,
            complete:!task.complete
          }
        } else {
          return task;
        }
      })
    })
  }

  //Add Tasks to list
  handleAddItem = (name) =>{
    this.setState({
      list:[...this.state.list, {
        name: name,
        id: this.state.list.length,
        complete:false
      }]
    })
  }

  //Clear List of selected
  clearItems = () =>{
    this.setState({
      list:this.state.list.filter(task=>(!task.complete))
    })
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoForm handleAddItem={this.handleAddItem}/>
        <TodoList handleClearItems={this.clearItems} handleToggleItem={this.handleToggleItem} list ={this.state.list}/>
      </div>
    );
  }
}

export default App;
