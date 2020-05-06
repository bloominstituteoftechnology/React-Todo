import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [{
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }] };
  }

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  }

  addNewTodo = task => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task, id: Date.now(), completed: false }
      ]
    });
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <TodoForm addNewTodo={this.addNewTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
