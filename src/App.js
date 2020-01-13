import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";
import ToDoForm from "./components/TodoComponents/TodoForm";

const list = [
  {
    task: "Organize garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Pay bills",
    id: 1528817084332,
    completed: false
  },
  {
    task: "Go to market",
    id: 152881708433908,
    completed: false
  },
  {
    task: "Call mom",
    id: 152881708435908,
    completed: false
  }
];

class App extends React.Component {
  //constructor with state
  constructor() {
    super();
    //initialize the state object
    this.state = {
      toDoList: list
    };
  }

  //add class methods to update state below
  //arrow function implicitly binds the "this" keyword to the function
  toggleItem = id => {
    //find item that was clicked on
    //toggle the completed field
    //update state with new todo list data
    const newToDoList = this.state.toDoList.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    //update toDoList
    this.setState({
      toDoList: newToDoList
    });
  };

  addTask = itemTask => {
    const newTask = {
      task: itemTask,
      id: Date.now(),
      completed: false
    };
    this.setState({ toDoList: [...this.state.toDoList, newTask] });
  };

  clearCompleted = () => {
    const clearedToDoList = this.state.toDoList.filter(item => {
      return item.completed === false;
    });
    this.setState({
      toDoList: clearedToDoList
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>Tasks:</h3>
        <ToDoList list={this.state.toDoList} toggleItem={this.toggleItem} />
        <ToDoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
