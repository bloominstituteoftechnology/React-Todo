import React, { Component } from "react";
import ReactDOM from "react";
import Header from "./components/HeaderComponents/Header";
import ToDoList from "./components/ToDoItemComponents/ToDoList";
import ToDoItem from "./components/ToDoItemComponents/ToDoItem";

// HINTS
// USE .filter to remove todos completed

// const App = () => (
//   <div>
//     <h2>Todo App</h2>
//   <Header />
//   <ToDoList />
//   </div>
// );
class App extends Component {
    // no other module should have state
    state = {
      toDoItems: [
        {
          toDoTitle: "Organize garage",
          todoId: 123456,
          toDoContent: "Get the garage right",
          completed: false,
        },
        {
          toDoTitle: "Clear out empty boxes",
          todoId: 567890,
          toDoContent: "Break down and remove all non-reuseable boxes.",
          completed: false,
        }
      ]
    }

  handleClick = todoId => {
    // what to do with the todoId?
    alert(todoId)
  }
  render() {

    return (
      <div>
        <h1>D2rd Stuff ToDo</h1>
        <Header />
        <ToDoList
          ToDoList
          toDoItems={this.state.toDoItems}
          handleClick={this.handleClick}
          />
      </div>
    );
  }
}
export default App;