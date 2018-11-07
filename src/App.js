import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      id: Date.now(),
      completed: false
    };
  }

  addHandler = () => alert(this.state.task);

  changeHandler = event => this.setState({ task: event.target.value });

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
        <TodoForm onChange={this.changeHandler} onClick={this.addHandler} />
      </div>
    );
  }
}

export default App;
