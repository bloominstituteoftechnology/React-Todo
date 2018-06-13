import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos:
        [
          {
            task: 'Organize garage',
            id: Date.now(),
            completed: false
          },
          {
            task: 'Bake cookies',
            id: Date.now(),
            completed: false
          }
        ],
      todo: ''
    };
  }

  onChange = event => {
    this.setState({todo: event.target.value});
  }

  addTodo = () => {
    const todos = this.state.todos.slice();
    todos.push(this.state.todo);
    this.setState({todos: todos, todo: ''});
  };


  render() {
    return (
      <div id="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
