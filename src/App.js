import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import Todos from './components/TodoComponents/Todo';

import './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: 'Billy`s List',
      placeholder: 'Add an item',
      todos: Todos,
      todo: ""
    } 
  }
  addTodo = () => {
    const todos = this.state.todos.slice();

    const input = document.querySelector('#todo-input');

    const newItem = {
      task: input.value,
      id: Date.now(),
      completed: false
    }
    todos.push(newItem);
    this.setState({todos: todos});
    input.value = this.state.placeholder;

  }
  markComplete = event => {
    console.log(event.target);

  }
  clear = () => {

  }
  

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input 
            type="text"
            id="todo-input"
            placeholder="Add Todo"
        />
        <button onClick={this.addTodo}>Add To Do</button>
        <TodoList markComplete={this.markComplete} billys={this.state.todos}/>
      </div>
    );
  }
}

export default App;
