import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = { 
      Todos: [],
      Todo: '', 
    };
  }

  changeInput = event => {
    this.setState({ Todo: event.target.value })
  };

  addTask = event => {
    event.preventDefault();
    const Todos = this.state.Todos.slice();
    Todos.push({ task: this.state.Todo, id: Date.now(), completed: false });
    this.setState({ Todos, Todo: '' });

  }

  toggleClick = id => {
    let todos = this.state.Todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  }

  clearCompleted = event => {
    event.preventDefault();
    let Todos = this.state.Todos.slice();
    Todos = Todos.filter(Todo => !Todo.completed);
    this.setState({ Todos });
  }
  
  render() {
    return (
      <div>
        <TodoForm 
        onChangeInput={this.changeInput} 
        clickEvent={this.addTask} 
        clearCompleted={this.clearCompleted}
        valueOfState={this.state.Todo}
        />
        <TodoList 
        todos={this.state.Todos} 
        handleClick={this.toggleClick}
        />
      </div>
    );
  }
}

export default App;
