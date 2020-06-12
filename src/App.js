import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }
  toggleTodo = (todoID) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoID === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  addNewTodo = (taskName) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task: taskName, completed: false, id: Date.now() },
      ],
    });
  };
  clearTodo = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      }),
    });
  };

  render() {
    return (
      <div>
        <h2 cla>Welcome to your Todo App!</h2>
        <TodoForm addNewTodo={this.addNewTodo} clearTodo={this.clearTodo} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          className="list"
        />
      </div>
    );
  }
}

export default App;
