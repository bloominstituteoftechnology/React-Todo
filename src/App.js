import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

const todos = [
  { task: "Organize Garage", id: 1528817077286, completed: false },
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
    // I am intializing the state object
    this.state = {
      todos: todos,
    };
  }

  deleteCompleted = (id) => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item.completed === false;
      }),
    });
  };

  toggleItem = (id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  addTodo = (i) => {
    const newTodo = {
      task: i,
      id: new Date(),
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          {console.log("I am todo", todos)}
          <h2>Welcome to your Todo App!</h2>
          <TodoList
            todos={this.state.todos}
            toggleItem={this.toggleItem}
            deleteCompleted={this.deleteCompleted}
          />
          <TodoForm addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
