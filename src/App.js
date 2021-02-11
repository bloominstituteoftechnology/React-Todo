import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todo = [
  {
    name: "Wash Dishes",
    id: 1,
    finished: false,
  },
  {
    name: "Go for a run",
    id: 2,
    finished: false,
  },
  {
    name: "Homework",
    id: 3,
    finished: false,
  },
  {
    name: "Call dad",
    id: 4,
    finished: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  toggleFinished = (itemId) => {
    console.log("toggling", itemId);
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList toggleFinished={this.toggleEntry} todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
