import React from 'react';
import {data} from "./data";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
  super();
  this.state = {
    data
  };
}
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
addItem = (itemTask) => {
  const newItem = {
    task: itemTask,
    id: Date.now(),
    completed: false
  };
  this.setState({
    ...this.state,
    data: [...this.state.data, newItem]
  });
};
clearCompleted = (e) => {
  e.preventDefault();
  this.setState({
    ...this.state,
    data: this.state.data.filter((item) => !item.completed)
  });
}
toggleItem = (itemId) => {
  console.log("Toggling item: ", itemId);
  this.setState({
    //find the item in data array and toggle its completed flag
    data: this.state.data.map((item) => {
      if(itemId === item.id){
        return {
          //return the item with the completed flag toggled
          ...item,
          completed: !item.completed
        };
        
      }
      return item;
    }) 
  })
}

  render() {
    return (
      <>
      <div className="header">
        <h1>Keep yourself organised with this To-Do App</h1>
      </div>
      <TodoList data={this.state.data} toggleItem={this.toggleItem}/>
      <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
      </>
    );
  }
}

export default App;
