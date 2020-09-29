import React from "react";
import data from "./data";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
    };
    console.log(this.state);
  }

  addTodoItem = (chores) => {
    const newTodo = {
      id: Date.now(),
      task: chores,

      completed: false,
    };

    this.setState({
      todo: [...this.state.data, newTodo],
    });
    let setLocal = JSON.stringify(newTodo);
    localStorage.setItem("state", setLocal);
    console.log(setLocal);

    setLocal = localStorage.getItem("state");
    if (setLocal === null) return undefined;
    return JSON.parse(setLocal);
  };

  toggleTodo = (todoId) => {
    console.log(todoId);
    this.setState({
      data: this.state.data.map((a) => {
        if (todoId === a.id) {
          return {
            ...a,
            completed: !a.completed,
          };
        }
        return a;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();

    this.setState({
      todo: this.state.data.filter((item) => !item.completed),
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addTodoItem={this.addTodoItem}
          clearCompleted={this.clearCompleted}
        />
        <TodoList data={this.state.data} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
