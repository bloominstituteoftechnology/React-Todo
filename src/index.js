import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from "./components/TodoForm";

const todolist = [
  {
    task: "Deposit money",
    id: 123,
    completed: false
  },
  {
    task: "Shop for groceries",
    id: 124,
    completed: false
  },
  {
    task: "Dentist appointment",
    id: 1235,
    completed: false
  },
  {
    task: "Pay accountant",
    id: 1246,
    completed: false
  },
  {
    task: "Research adopt-a-pet",
    id: 1237,
    completed: false
  },
  {
    task: "Morning coffee",
    id: 1248,
    completed: false
  }
];

class App extends React.Component {
  //Constructor with state
  constructor() {
    super();
    this.state = {
      todolist   //todoList: todoList
    };
  }


// Class methods to update state
// toggleItem(itemId) {
//  }
addItem = (e, itemName) => {
  e.preventDefault();
  const existing = this.state.todolist.filter(
    item => item.task === itemName
  );
  if (existing.length === 0) {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todolist, newItem]
    });
  }
};




  render() {
    console.log("rendering..");
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List:</h1>
        </div>
      </div>
    );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
