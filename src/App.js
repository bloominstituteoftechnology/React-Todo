import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super(); //lets us access lifecycle methods
    this.state = {
      todos: []

      // [{ todoItem: "Get on computer" }, { todoItem: "Study React" }]
    };
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
