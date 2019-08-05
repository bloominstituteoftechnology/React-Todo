import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

import './components/TodoComponents/Todo.css'

const todoData = [
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
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: todoData
    }
  }  

  toggleTodo = id => {
    this.setState({
      data: this.state.data.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      data: [...this.state.data, newTodo]
    });
  };

  clearCompleted = () => {
    this.setState({
      data: this.state.data.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div className='App'>
          <div className='header'>
            <h1>Todos</h1>
            <TodoForm addTodo={this.addTodo} />
          </div>
          <TodoList 
            data={this.state.data}
            toggleTodo={this.toggleTodo}
            clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
