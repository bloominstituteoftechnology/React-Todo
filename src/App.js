import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoData
    };
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
    console.log(this.state.todo, "New Task has been added");
  };

  toggleItem = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(task => !task.completed)
    });
  };
  render() {
    return (
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
          <TodoList
              todo={this.state.todo}
              toggleItem={this.toggleItem}
              clearCompleted={this.clearCompleted}
          />
        </div>
    );
  }
}

export default App;