import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: [{ text: 'Shop for food', completed: false }]
    };
  }

  todoHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitTodo = e => {
    e.preventDefault();
    const { todos } = this.state;
    const myTodo = { text: this.state.newTodo, completed: false };
    todos.push(myTodo);
    this.setState({ todos, newTodo: '' });
  };

  onCompleteHandler = childTodo => {
    const { todos } = this.state;
    todos.forEach(todo => {
      if (todo.text === childTodo.text) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({ todos });
  };

  onClearTodos = () => {
    const { todos } = this.state;
    const completedTodos = todos.filter(todo => todo.completed === false);
    this.setState({ todos: completedTodos });
  };

  render() {
    return (
      <div>
        <h2>Todo Foo</h2>
        <form onSubmit={this.handleSubmitTodo}>
          <input
            type="text"
            placeholder="Add todo"
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.todoHandler}
          />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={this.onClearTodos}>Clear Completed</button>
        <TodoList
          completeTodo={this.onCompleteHandler}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;