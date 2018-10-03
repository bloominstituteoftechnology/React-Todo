import React from "react";
import Form from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";

let todoData = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false
  },
  {
    task: "Bake Cookies",
    id: Date.now(),
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: todoData
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo />
        <Form />
      </div>
    );
  }
}

export default App;
