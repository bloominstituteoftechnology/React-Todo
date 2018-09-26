import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: []
    };
  }

  addTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      isCompleted: false
    };

    this.setState({
      todoData: [...this.state.todoData, newTask]
    });

    console.log(this.state.todoData);
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList list={this.state.todoData} />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
