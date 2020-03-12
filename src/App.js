import React from "react";
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";
import "./components/Todo.css";
const ToDos = [
  {
    todo: "pet cats",
    id: 12,
    completed: false
  },
  {
    todo: "study the TK",
    id: 13,
    completed: false
  },
  {
    todo: "go eat a pizza",
    id: 14,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ToDos
    };
  }

  toggleCompleted = itemId => {
    console.log("toggleCompleted in app", itemId);
    this.setState({
      ToDos: this.state.ToDos.map(item => {
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
      ToDos: [
        ...this.state.ToDos,
        {
          todo: itemName,
          completed: false,
          id: Date.now()
        }
      ]
    });
  };

  clearCompleted = () => {
    console.log("clear completed");
    this.setState({
      ToDos: this.state.ToDos.filter(item => {
        return !item.completed;
      })
    });
  };
  //still need to add item and clear purchased and work on render
  render() {
    return (
      <div>
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm addItem={this.addItem} />
        </div>
        <ToDoList
          ToDos={this.state.ToDos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
//still need to add components and state ^
export default App;
