import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./Todo.css";

const todoList = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleTodo = todoId => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTodo = (e, todo) => {
    e.preventDefault();

    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  clearCompleted = e => {
    e.preventDefault();

    this.setState({
      todoList: [...this.state.todoList.filter(todo => !todo.completed)]
    });
  };
  render() {
    return (
      <div>
        <h2>My List:</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          toggleTodo={this.toggleTodo}
          todoList={this.state.todoList}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;