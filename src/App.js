import React, { Component } from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./Styles.css";

const todolist = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      // groceries: groceries
      todolist
    };
  }

  // Class methods to update state
  // function togglePurchased(itemId) {
  //    avoid creating functions like this
  //    because this is a reminder that classes
  //    in javascript were gleemed on as an ugly hack
  // }
  togglePurchased = (itemId) => {
    console.log("bk: index.js: App: togglePurchased: itemId: ", itemId);
    // update state
    // this.state.groceries[id].purchased = false;
    this.setState({
      ...this.state,
      todolist: this.state.todolist.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
        <TodoList
          todolist={this.state.todolist}
          togglePurchased={this.togglePurchased}
        />
      </div>
      <TodoForm />
      </div>
    );
  }
}

export default App;