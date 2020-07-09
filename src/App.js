import React from "react";

import "./components/Todo.css";

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
  {
    task: "Work Out",
    id: 1528817736358,
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

  addItem = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: "",
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  toogleCompleted = (itemId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList
          todos={this.state.todos}
          toogleCompleted={this.toogleCompleted}
        />
      </div>
    );
  }
}

export default App;
