import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state= {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          complete: false
        },
      ],
      todo: ''
    };
  }

  addItem = e => {
    e.preventDefault();
    const newList = {task: this.state.todo, completed: false, id: Date.now()};
    this.setState({
      todos: [...this.state.todos, newList],
      todo:''
    });
  };

  changeList = e => this.setState({[e.target.name]: e.target.value});

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos =todos.map(todo => {
      if(todo.completed === id) {
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
        <h2>Todo:</h2>
        <TodoList 
          handldeToggleComplete = { this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm 
          value={this.state.todo}
          handleTodoChange={this.changeList}
          handleAddTodo={this.addItem}
          handleClearTodos={this.clearCompletedTodos}
        />
        </div>
    );
  }
}

export default App;
