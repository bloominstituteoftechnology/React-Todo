import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

import TodoForm from "./components/TodoComponents/TodoForm";
import Header from "./components/TodoComponents/Header";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  };

  clearCompleted = async () => {
    const newList = this.state.todos.filter(item => {
      return item.completed === false;
    });

    await this.setState({ todos: newList });
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  addTodo = async todo => {
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false
        }
      ]
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  updateTodo = todo => {
    const newTodos = this.state.todos.map(item => {
      if (todo === item) {
        return {
          text: todo.text,
          completed: !todo.completed
        };
      } else return item;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="todo-card-container">
        <Header />
        <TodoForm addTodo={this.addTodo} />
        <button onClick={() => this.clearCompleted()}>Clear List</button>
        <TodoList updateTodo={this.updateTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
