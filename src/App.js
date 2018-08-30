import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: ""
    };
  }

  addTask = event => {
    let list = this.state.list.slice();

    list.push({
      task: this.state.input,
      id: Date.now(),
      completed: false
    });
    this.setState({
      list: list,
      input: ""
    });
    event.preventDefault();
  };

  crossTask = event => {
    let list = this.state.list.slice();
    let xa = list.filter(item => item.task === event.target.textContent);
    if (xa[0].completed === true) {
      xa.forEach(item => (item.completed = false));
    } else if (xa[0].completed === false) {
      xa.forEach(item => (item.completed = true));
    }
    this.setState({ list: list });
  };

  clearCompletedTasks = event => {
    let list = this.state.list.slice();
    let newList = list.filter(item => item.completed !== true);
    if (newList.length === 0) {
      newList.push({
        task: "Add a task",
        id: Date.now(),
        completed: false
      });
      this.setState({ list: newList });
    }
    this.setState({ list: newList });
  };

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <div className="main-container">
        <h1>To-Do List</h1>
        <TodoForm
          addTask={this.addTask}
          clearCompletedTasks={this.clearCompletedTasks}
          value={this.state.input}
          handleChange={this.handleChange}
        />
        <div className="todo-list-container">
          {this.state.list.map(item => (
            <TodoList
              className={item.completed ? "crossOut" : false}
              key={item.id}
              inputValue={item.task}
              crossTask={this.crossTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
