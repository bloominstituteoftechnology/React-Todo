import React from 'react';

import data from './components/TodoComponents/Todo';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {list:data,newItem:''};
  }
  handleInput = event => {
    this.setState({list:this.state.list,newItem:event.target.value});
  }
  addTask = event => {
    event.preventDefault();
    this.setState({list:
    [
      ...this.state.list,
      {task:this.state.newItem,id:Date.now(),done: false}
    ],
    newItem:this.state.newItem});
  }
  clearFinished = event => {
    event.preventDefault();
    this.setState({list:this.state.list.filter(i=>!i.done),newItem:this.state.newItem});
  }
  doneToggle = event => {
    const list = this.state.list;
    let target = -1;
    list.forEach((item,index)=>{
      if(Number(item.id) === Number(event.target.id))target=index
    });
    list[target].done = !list[target].done;
    this.setState({list:list,newItem:this.state.newItem});
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} doneToggle={this.doneToggle} />
        <TodoForm 
          handleInput={this.handleInput}
          addTask={this.addTask} 
          clearFinished={this.clearFinished}/>
      </div>
    );
  }

}
