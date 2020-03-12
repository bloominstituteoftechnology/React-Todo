import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1,
          description: 'Initial todo',
          completed: true},
        { id: 2,
          description: 'another todo',
          completed: false},
      ]
    }
  }

  addTodo = todoDescription => {
    this.setState({
      todos: [...this.state.todos, {
        id: (Math.random() * Math.random()).toString(9).substr(2, 9),
        description: todoDescription,
        completed: false
      }]
    });
  }

  toggleCompleted = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
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
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
