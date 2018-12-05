import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          task: "eat",
          id: 1,
          completed: false
        },
        {
          task: "sleep",
          id: 2,
          completed: false
        }
      ],
      todo: ""
    };
  }

  addTasl = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
