import React from 'react';
import shortid from "shortid";
import TodoList from "./components/TodoComponents/TodoList.js";

// const tasks = [
//   {
//     task: "Fix ceiling light",
//     id: 1,
//     completed: false
//   },
//   {
//     task: "Eat homemade tamales",
//     id: 2,
//     completed: false
//   },
//   {
//     task: "Play videogames with friends",
//     id: 3,
//     completed: false
//   },
// ];

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     todo: [{
  //       text: "",
  //       id: shortid.generate(),
  //       complete: false
  //     }]
  //   };
  // }

  clearTodos = (event) => {
    event.preventDefault();
    this.setState({
      todos: this.state.todo.filter(todo => {
        return !todo.complete;
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Todolist: MVP</h2>
        <TodoList
          handleComplete={this.clearTodos}/>
      </div>
    );
  }
}

export default App;
