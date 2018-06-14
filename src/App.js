import React from 'react';
import "./components/TodoComponents/Todo.css";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
  }

  state = {
    todoInput: "",
    todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]
  }

  addTodo = event => {
    event.preventDefault();
    const task = this.state.todoInput;
    const id = Date.now();
    const newTodo = { task: task, id: id, completed: false };
    let todos = this.state.todos.slice();
    todos.push(newTodo);
    this.setState({ todos: todos, todoInput: "" });
  };

  changeTodoInput = event => {
    this.setState({ todoInput: event.target.value })
  }

  toggleCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos: todos });
  }

  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed)
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div>
        <h2>Todo list: MVP</h2>
        <TodoList todos={this.state.todos}
                  toggleCompleted={this.toggleCompleted} />
        <TodoForm addTodo={this.addTodo}
                  todoInput={this.state.todoInput}
                  clearCompleted={this.clearCompleted}
                  changeTodoInput={this.changeTodoInput} />
      </div>
    );
  }
}

export default App;
