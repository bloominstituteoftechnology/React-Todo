import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    name: "Buy some M I L K",
    id: 1,
    completed: false,
  },
  {
    name: "Order C E R E A L",
    id: 2,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos, //shortcut this.state = { groceries } because is identical
    };
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  addTodo = (todoName) => {
    const newTodo = {
      name: todoName,
      id: this.state.todos.length + 1,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.completed === false),
    });
  };

  render() {
    return (
      <>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <div className="App">
          <div className="header">
            <h1 onClick={() => this.setState({})}>To Do List</h1>
            <TodoForm addTodo={this.addTodo} />
          </div>
          <TodoList
            toggleTodo={this.toggleTodo}
            todos={this.state.todos}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </>
    );
  }
}
export default App;
