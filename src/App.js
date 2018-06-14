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
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake cookies',
            id: 1528817084358,
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
        <TodoForm addTodo={this.addTodo}/>

        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
