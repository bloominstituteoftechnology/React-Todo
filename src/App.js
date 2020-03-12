import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const list = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  state = {
    todoList: list
  };

  // design `App` to be the parent component of your application.
  addNewTodo = newTodoName => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newTodoName, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleCompleted = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(todo => {
        return !todo.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo App!</h1>
        </div>
        <div>
          <TodoForm addNewTodo={this.addNewTodo} />
        </div>
        <TodoList
          list={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
