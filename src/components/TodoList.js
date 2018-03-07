import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: {
        index: null,
        text: '',
        completed: false
      }
    };
  }

  handleClick = index => {
    const { todos } = this.state;
    const clicked = todos.filter(obj => obj.index === index);
    clicked[0].completed = !clicked[0].completed;
    const newTodos = [...todos.slice(0, index), ...todos.slice(index)];
    this.setState({ todos: newTodos });
  }

  handleInput = event => {
    this.setState({ newTodo: {
      index: this.state.todos.length,
      text: event.target.value,
      completed: false
    }});
  };

  addTodo = event => {
    event.preventDefault();
    const { todos } = this.state;
    todos.push(this.state.newTodo);
    this.setState({
      todos,
      newTodo: { text: '' }
    });
  };

  deleteTodo = index => {
    const todoList = this.state.todos.filter(obj => obj.index !== index);
    this.setState({ todos: todoList })
  }

  render() {
    const { newTodo, todos } = this.state
    return (
      <div>
        {todos.map((todo, i) =>
          todo.text && <Todo
            todo={todo.text}
            key={i}
            index={todo.index}
            completed={todo.completed}
            clicked={this.handleClick}
            deleteTodo={this.deleteTodo}
          />
        )}

        <form onSubmit={this.addTodo}>
          <input
            type="text"
            onChange={this.handleInput}
            placeholder="Add a new todo"
            value={newTodo.text}
          />
        </form>
      </div>
   );
  }
}

export default TodoList;