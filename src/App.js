import React from "react";
import "../src/components/TodoComponents/Todo.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: [
        {
          task: "First task",
          id: Date.now(),
          complete: false
        } //Initial state
      ] //Todo Array
    }; //State
  }
  componentDidMount() {} //Component Did Mount

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("tasks", "something");
  } //Component Will Update

  addTask = todoItem => {
    // localStorage.setItem("myStored", JSON.stringify(todoItem));
    // let taskStored = JSON.parse(localStorage.getItem("myStored"));
    // console.log(taskStored);
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: todoItem,
          id: Date.now(),
          complete: false
        }
      ]
    });
  };

  toggleComplete = taskID => {
    console.log(`you toggled complete: id ${taskID}`);
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
    console.log(`you clicked clear`);
    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.complete;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
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
