import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
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
      todos: todos,
    };
  }

  toggleItem = (id) => {
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

  addTodo =e => (todoItem) => {
    e.preventDefault()
    const newTodo = {
      task: todoItem,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  clearTodo = (e) => {
    e.preventDefault()
    this.setState({todos:this.state.todos.filter(todo=>!todo.completed)})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearTodo={this.clearTodo} />
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} clearTodo={this.clearTodo} />
      </div>
    );
  }
}

export default App;
