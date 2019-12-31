import React from "react";
import "../src/components/TodoComponents/Todo.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
// import TodoSearch from "./components/TodoComponents/TodoSearch";

class App extends React.Component {
  constructor() {
    super();
    const todoItems = JSON.parse(localStorage.getItem("tasks"));
    this.state = {
      todo: todoItems ? todoItems : ""
      //Todo Array
    }; //State
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("tasks", JSON.stringify(nextState.todo));
    localStorage.setItem("tasksDate", Date.now());
  } //Component Will Update

  addTask = todoItem => {
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: todoItem,
          id: Date.now(),
          complete: false,
          isProcrastinating: false
        }
      ]
    });
  };

  toggleComplete = taskID => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === taskID)
          return {
            ...task,
            complete: !task.complete
          };
        return task;
      })
    });
  };

  clearComplete = () => {
    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.complete;
      })
    });
  };

  render() {
    return (
      <div className="app">
        {this.state.todo.length !== 0 ? (
          <h4>Cross It Off</h4>
        ) : (
          <h4>Really, Nothing?</h4>
        )}
        <TodoForm addTask={this.addTask} />
        <TodoList
          todo={this.state.todo}
          clearComplete={this.clearComplete}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
