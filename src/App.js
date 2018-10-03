import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { taskName: "Study Training Kit" },
        { taskName: "Practice React" },
        { taskName: "Attempt Stretch Task" }
      ],
      inputText: "",
      id: Date.now(),
      completed: false
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  inputTextHandler = e => {
    e.preventDefault();
  };

  render() {
    // console.log(this.state.todo.task);
    return (
      <div>
        <h2>Todo App</h2>
        <TodoList taskList={this.state.tasks} />
        <Todo />
        <TodoForm />
      </div>
    );
  }
}

export default App;
