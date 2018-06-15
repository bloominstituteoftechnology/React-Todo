import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();

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

  addTodo = event => {
    event.preventDefault();

    const todos = this.state.todos.slice();
    todos.push({task: this.state.todo, completed: false, id: Date.now()});
    this.setState({todos, todo: ''});
  };

  changeTodo = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div id="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          value={this.state.todo}
          handleAddTodo={this.addTodo}
        />

        <TodoList 
          todos={this.state.todos}
          handleTodoChange={this.changeTodo}
        />
      </div>
    );
  }
}

export default App;
