import React from "react";
import TodoList from "../src/components/TodoComponents/TodoList";
import AddForm from "../src/components/TodoComponents/AddForm";
import "./components/TodoComponents/Todo.css"
import ls from 'local-storage'

class App extends React.Component {
  constructor(){
    super();
    if (localStorage.getItem("localList"))
    { this.state = {
      todos: JSON.parse(localStorage.getItem("localList"))}}

      else{
    this.state = {todos: [
      { id: 1, content: "Smoke Meat", done: false },
      { id: 2, content: "Apply Sweet Baby Ray's", done: false },
      { id: 3, content: "Upload Viral Live Hangout Vid", done: false },
      { id: 4, content: "Give fans the Zucc", done: false }
    ]}}
  }

  


  addItem = itemName => {
    const newItem = {
      content: itemName,
      id: Date.now(),
      done: false
    };
    console.log("new Item", newItem)
    this.setState({
      todos: [...this.state.todos, newItem]
      
    });
    console.log(this.state);
    
    console.log("localList", localStorage.getItem("localList"))
  };


  toggleItem = id => {
    console.log(id);
    
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          console.log(item);
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      })
    });
  };

  saveList = () => {
    localStorage.setItem("localList", JSON.stringify(this.state.todos));
  }


  clearComplete = () => {
    console.log("clear button pushed");
    this.setState({
      todos: this.state.todos.filter(item => !item.done)
    });
  };




  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App" >
        <div className="container">
          <h1>To-Do List - A Study In Anti-Productivity</h1>
          <TodoList 
          todos={this.state.todos} 
          clearComplete={this.clearComplete} 
          toggleItem={this.toggleItem} />

          <AddForm addItem={this.addItem} />
          <button onClick ={this.saveList}>Save List </button>
        </div>
      </div>
    );
  }
}

export default App;
