import React, { Component } from "react";
import ReactDOM from "react-dom";

import GroceryList from "./components/GroceryList";
import TodoForm from "./components/TodoForm";
import "./Styles.css";

const groceries = [
  {
    name: "Bananas",
    id: 123,
    purchased: false
  },
  {
    name: "Torillas",
    id: 124,
    purchased: false
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      // groceries: groceries
      groceries
    };
  }

  // Class methods to update state
  // function togglePurchased(itemId) {
  //    avoid creating functions like this
  //    because this is a reminder that classes
  //    in javascript were glomed on as an ugly hack
  // }
  togglePurchased = (itemId) => {
    console.log("bk: index.js: App: togglePurchased: itemId: ", itemId);
    // update state
    // this.state.groceries[id].purchased = false;
    this.setState({
      ...this.state,
      groceries: this.state.groceries.map((item) => {
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

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <TodoForm />
        </div>
        <GroceryList
          groceries={this.state.groceries}
          togglePurchased={this.togglePurchased}
        />
      </div>
    );
  }
}

export default App;