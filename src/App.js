import React from 'react';
import './components/Todo.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: [],
  };

  componentDidMount() {
    const { todos } = JSON.parse(window.localStorage.getItem('todos'));
    if (todos) {
      this.setState({ ...this.state, todos });
    } else {
      window.localStorage.setItem('todos', []);
    }
  }

  componentDidUpdate() {
    window.localStorage.setItem(
      'todos',
      JSON.stringify({ todos: this.state.todos })
    );
  }

  addTodo = (todo) => {
    this.setState({
      ...this.state,
      todos: [...this.state.todos, { todo, id: Date.now(), completed: false }],
    });
  };

  toggleTodo = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      }),
    });
  };

  clearTodos = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => todo.completed !== true),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearTodos={this.clearTodos} />
        <TodoList todoList={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
