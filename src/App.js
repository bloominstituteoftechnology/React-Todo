import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// import TodoSearch from './components/TodoComponents/TodoSearch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
      ],
      todo: ''
    };
  }
    changeTodo = e => this.setState({ [e.target.name]: e.target.value });

    addTodo = e => {
      e.preventDefault();
      const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
      this.setState({
        todos: [...this.state.todos, newTodo],
        todo: ''
      });
    };

    toggleTodoComplete = id => {
      let todos = this.state.todos.slice();
      todos = todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      this.setState({ todos });
    };

    clearCompletedTodos = e => {
      e.preventDefault();
      let todos = this.state.todos.filter(todo => !todo.completed);
      this.setState({ todos });
    };

  render() {
    return (
      <div>
        <TodoList
          handleSetComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleUpdate={this.changeTodo}
          handleAdd={this.addTodo}
          handleClear={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;