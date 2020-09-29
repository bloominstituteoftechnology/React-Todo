import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

const tasks = [
  {
    name: "laundry",
    id: 12345,
    completed: false,
  },
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      tasks,
    };
  }

  // Class methods to update state
  toggleTodo = (todoId) => {
    console.log(todoId);

    this.setState({
      // Build a new state object each time
      tasks: this.state.tasks.map((todo) => {
        if (todoId === todo.id) {
          return {
            // return the todo with completed field toggled
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  // Class method to add a todo task
  addTodo = (todo) => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTodo],
    });
  };

  clearCompleted = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((todo) => todo.completed === false),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          clearCompleted={this.clearCompleted}
          tasks={this.state.tasks}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
