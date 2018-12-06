import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
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
      ]
    };
  }

  createNewTodoObject = text => {
    const newTodo = {
      task: text,
      id: Date.now(),
      completed: false
    };

    const oldTodos = this.state.todos.slice();
    oldTodos.push(newTodo);

    this.setState({ todos: oldTodos });
  };

  toggleCompleted = () => {
    this.setState({ completed: !this.state.completed });
  };

  render() {
    return (
      <div className="App">
        <h2>Actions</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          createNewTodoObject={this.createNewTodoObject}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
