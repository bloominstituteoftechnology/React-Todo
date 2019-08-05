import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";

import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const todoData = [
  {
    task: "Go to the Store",
    id: 1,
    completed: false
  },
  {
    task: "Wash the car",
    id: 2,
    completed: false
  },
  {
    task: "Grab some food",
    id: 3,
    completed: false
  },
  {
    task: "Go to the mechanic",
    id: 4,
    completed: false
  },
  {
    task: "Take the family out",
    id: 5,
    completed: false
  },
  {
    task: "Go to church",
    id: 6,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [...todoData]
    };
  }

  toggleITodo = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });

    console.log(this.state.todoData);
  };

  todoCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          todoCompleted={this.todoCompleted}
        />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
