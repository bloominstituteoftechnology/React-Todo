import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
      ],
      todo: ""
    };
  }

  addTodo = e => {
    e.preventDefault();
    const list = this.state.list.slice();
    list.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ list, todo: "" });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleComplete = id => {
    let list = this.state.list.slice();
    list = list.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ list });
  };

  clearCompleted = e => {
    e.preventDefault();
    let list = this.state.list.slice();
    list = list.filter(todo => !todo.completed);
    this.setState({ list });
  };

  render() {
    return (
      <div className="container">
      <h1> Ultimate ToDo List Maker </h1>
        <TodoForm
          value={this.state.todo}
          handlerTodoChange={this.changeTodo}
          handlerAddTodo={this.addTodo}
          handlerClearTodos={this.clearCompleted}
        />
      
        <TodoList
          handlerToggleComplete={this.toggleComplete}
          todos={this.state.list}
        />
      </div>
    );
  }
}

export default App;
