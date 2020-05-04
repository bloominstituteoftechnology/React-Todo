import React from "react";
// import TodoItems from "./components/Todo";
import ReactDom from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./components/Todo.css";

const todoItems = [
  {
    task: "wake up",
    id: Math.random(),
    completed: false
  },
  {
    task: "get up",
    id: Math.random(),
    completed: false
  },
  {
    task: "make coffee",
    id: Math.random(),
    completed: false
  },
  {
    task: "take vitamin",
    id: Math.random(),
    completed: false
  },
  {
    task: "drink protein shake",
    id: Math.random(),
    completed: false
  }
];
console.log(todoItems);

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems
    };
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newItem]
    });
  };

  render() {
    return (
      <>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
          <TodoList todoItems={this.state.todoItems} />
        </div>
      </>
    );
  }
}

export default App;
