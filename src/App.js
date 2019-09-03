import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

import TodoForm from "./components/TodoComponents/TodoForm";

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
  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <button onClick={() => this.clearCompleted()}>Clear List</button>
        <TodoList updateTodo={this.updateTodo} todos={this.state.todos} />
      </div>
    );
  }

  clearCompleted = () => {
    const newList = this.state.todos.filter(item => {
      return item.completed === false;
    });

    this.setState({ todos: newList });
  };

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
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
}

export default App;
