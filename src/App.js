import React from "react";
import TodoList from "../src/components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const dataTodo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      dataTodo: dataTodo
    };
  }
  toggleCompleted = itemId => {
    this.setState({
      dataTodo: this.state.dataTodo.map(item => {
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

  addItem = itemName => {
    this.setState({
      dataTodo: [
        ...this.state.dataTodo,
        {
          task: itemName,
          completed: false,
          id: Date.now()
        }
      ]
    });
  };

  clearCompleted = () => {
    console.log("bk: index.js: App: clearPurchased");
    this.setState({
      dataTodo: this.state.dataTodo.filter(item => {
        return !item.completed;
      })
    });
  };

  render() {
    //console.log("datenow", Date.now())
    return (
      <div className="container">
        <TodoForm addItem={this.addItem} />
        <h2>Welcome to Todo App!</h2>
        <TodoList
          TodoList={this.state.dataTodo}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
