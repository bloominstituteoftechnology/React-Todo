import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const data = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    },
    {
      task: 'Wash Car',
      id: 1528817045614,
      completed: false
    },
    {
      task: 'Doing Laundry',
      id: 1528817078945,
      completed: false
    }
  ];

class App extends React.Component {

  constructor() {
    super();

  }
  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to Your Todo List App</h1>
        </div>
        </div>
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
