import React, { Component } from "react";
import ReactDOM from "react-dom";
import ToDoList from "./components/TodoList"
import ToDoForm from './components/TodoForm'

const toDo = [
  {
    item: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    item: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      toDo: toDo
    }
  }
  
  toggleList = (itemId) => {
    console.log("bk: index.js: App: togglePurchased: itemId: ", itemId);
    // update state
    // this.state.groceries[id].purchased = false;
    this.setState({
      ...this.state,
      toDo: this.state.toDo.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  };

  addItem = (itemName) => {
    this.setState({
      toDo: [
        ...this.state.toDo,
        { task: itemName, purchased: false, id: Date.now() }
      ]
    });
  };

  clearList = () => {
    // set state to clear all purchased items
    this.setState({
      toDo: this.state.toDo.filter((item) => !item.purchased)
    });
  };


  render() {
    return (
      <div>
        <div>
          <h1>ToDo List!</h1>
          <ToDoForm addItem={this.addItem} />
        </div>
        <ToDoList
          toDo={this.state.toDo}
          togglePurchased={this.toggleList}
          clearPurchased={this.clearList}
        />
      </div>
    );
  }
}

export default App;
