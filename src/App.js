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
    searchInput: '',
  };

  componentDidMount() {
    if (window.localStorage.getItem('todos')) {
      const { todos } = JSON.parse(window.localStorage.getItem('todos'));
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
      <div className="md:container md:mx-auto h-screen">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-1/2 w-full flex flex-col justify-center items-center shadow-md">
          <div className="w-5/6 lg:w-4/6 flex flex-col justify-center md:text-left text-center">
            <h2 className="text-5xl mb-4">Welcome to your Todo App!</h2>
            <TodoForm addTodo={this.addTodo} clearTodos={this.clearTodos} />
          </div>
        </div>
        <TodoList
          todoList={this.state.todos.filter((todo) =>
            this.state.searchInput
              ? todo.todo.includes(this.state.searchInput)
              : true
          )}
          toggleTodo={this.toggleTodo}
          searchInput={this.state.searchInput}
          updateSearchInput={(k) =>
            this.setState({ ...this.state, searchInput: k })
          }
        />
      </div>
    );
  }
}

export default App;
