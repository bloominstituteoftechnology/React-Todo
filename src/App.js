import React from "react";
import TodoList from "../src/components/TodoComponents/TodoList";
import AddForm from "../src/components/TodoComponents/AddForm";
import "./components/TodoComponents/Todo.css"

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "Smoke Meat", done: false },
      { id: 2, content: "Apply Sweet Baby Ray's", done: true }
    ]
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
  };


  toggleItem = id => {
    console.log(id);
    // Update groceries on our state object
    // use this.setState
    // loop through the arr
    // find which element we clicked update the "pruchased" property
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
        </div>
      </div>
    );
  }
}

export default App;
