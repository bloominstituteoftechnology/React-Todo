import React from "react";
import Todo from "../src/components/TodoComponents/Todo";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";
//import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: Date.now(),
      task: " ",
      completed: false
    };
    this.tasks = [];
  }



  render() {
    return (
      <div className="container">
        <TodoList taskLists={this.tasks} />
        <Todo />
        <TodoForm />
      </div>
    );
  }
}

export default App;