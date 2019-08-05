import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { task: "Learn React", id: "1", completed: false },
        { task: "Use State", id: "2", completed: false },
        { task: "Clean house", id: "3", completed: false }
      ]
    };
  }

  addTask = taskName => {
    const newTodo = { task: taskName, id: Date.now(), completed: false };
    this.setState({ newTodo: [...this.state.tasks] });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} />
        <TodoForm addTask={this.addTask} updateTodo={this.updateTodo} />
      </div>
    );
  }
}

export default App;
