import React from 'react';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodo = [
  {
    task: "Clean Kitchen",
    id: 123,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 124,
    completed: false
  },
  {
    task: "Organize Garage",
    id: 125,
    completed: false
  },
  {
    task: "Laundry",
    id: 126,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      initialTodo
    };
  }

  addItem = (e, item) => {
    console.log("adding task");
    e.preventDefault();
    const newItem = {
      task: item,
      completed: false,
      id: Date.now()
    };
    this.setState({
      ...this.state,
      initialTodo: [...this.state.initialTodo, newItem]
    });
  }

  //class method to update state 
  toggleItem = (itemId) => {
    console.log("toggling item", itemId);
    // map over array, look for the item we clicked
    // if the item id matches itemId, toggle its completed field
    // otherwise, return the item unmodified
    this.setState({
      ...this.state,
      initialTodo: this.state.initialTodo.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      initialTodo: this.state.initialTodo.filter((item) => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          initialTodo={this.state.initialTodo}
          toggleItem={this.state.initialTodo}
          clearCompleted={this.state.initialTodo}
        />
      </div>
    );
  }
}

export default App;
