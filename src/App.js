import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todos = [
  {
    task: "Code",
    id: Date.now(),
    completed: false
  },
  {
    task: "More Code",
    id: Date.now(),
    completed: false
  },
  {
    task: "Another Example",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodos: todos
    };
  }

  addTodo = newTodo => {
    const newTodoItem = {
      task: newTodo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      currentTodos: [...this.state.currentTodos, newTodoItem]
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList
            todos={this.state.currentTodos}
            toggleTodo={this.toggleTodo}
          />
          <TodoForm addNewTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
