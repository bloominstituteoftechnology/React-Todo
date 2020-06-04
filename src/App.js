import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const thingsToDo = [
  {
    name: "Go To Store",
    id: 123,
    completed: false
  },
  {
    name: "Go For Run",
    id: 124,
    completed: false
  },
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {

      thingsToDo
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      thingsToDo: [...this.state.thingsToDo, newItem]
    }); 
  };

  toggleItem = itemId => {
    this.setState({
      thingsToDo: this.state.thingsToDo.map(item => {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      thingsToDo: this.state.thingsToDo.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>To Do List</h1>
        <TodoForm addItem={this.addItem}>
        </TodoForm>
      </div>
      <TodoList
        thingsToDo={this.state.thingsToDo}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  };
}

export default App;
