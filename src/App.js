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

  componentWillMount() {
    localStorage.getItem("todos") &&
      this.setState({
        todos: JSON.parse(localStorage.getItem("todos")),
        isLoading: false,
      });
  }

  componentDidMount() {
    this.setState({
      todos: todos,
    });
  }

  addItem = (item) => {
    const newtask = {
      task: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newtask] });
    console.log(todos);
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

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return !item.completed;
      }),
    });
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todos", JSON.stringify(nextState.todos));
    localStorage.setItem("todosDate", Date.now());
  }

  render() {
    return (
      <div>
        <h2>What do you have to do today?</h2>
        <TodoList
          todos={this.state.todos}
          toogleCompleted={this.toogleCompleted}
          clearCompleted={this.clearCompleted}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
