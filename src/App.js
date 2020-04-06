import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { todos: [{ task: "hello", id: "11", completed: false }] };
  }

  addNewItem = (task) => {
    const obj = {
      task,
      id: Date(),
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, obj],
    });
  };

  toggleTask = (task) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (task === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  removeCompleted = () => {
    const filtered = this.state.todos.filter((todo) => todo.completed !== true);
    this.setState({
      todos: filtered,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} />
        <TodoList
          data={this.state.todos}
          toggleTask={this.toggleTask}
          removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
