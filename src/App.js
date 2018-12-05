import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listArr: [
        {
          task: "Take the trash out",
          id: 1,
          completed: false
        },
        {
          task: "Sing with the birds",
          id: 2,
          completed: false
        },
        {
          task: "Change the baby's diapers",
          id: 3,
          completed: false
        }
      ]
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.listArr} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
