import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: true
      }
    ],
  }

  addTodoBtnHandler = event => {
    const todos = this.state.todos.slice();
    const input = document.querySelector('input');
    const text = input.value;
    todos.push({
      task: text,
      id: Date.now(),
      completed: false
    });
    this.setState({todos: todos});
    input.value = "";
  }

  addTodoInputHandler = event => {
    const todos = this.state.todos.slice();
    const text = event.target.value;

    if(event.keyCode === 13) {
      todos.push({
        task: text,
        id: Date.now(),
        completed: false
      });
      this.setState({todos: todos});
      event.target.value = "";
    }
  }

  todoClickHandler = (event, id) => {
    const todoArr = this.state.todos.slice();
    const todo = todoArr.filter(td => td.id === id);
    
    todo[0].completed = !todo[0].completed;
    this.setState({todos: todoArr});
  }

  removeCompletedBtnHandler = (event) => {
    const todoArr = this.state.todos.slice();
    const notCompleted = todoArr.filter(td => !td.completed);
    this.setState({todos: notCompleted});
  }

  render() {
    return (
      <div className="container">
        <h1>TODO APP</h1>
        <TodoList todos={this.state.todos} todoClick={this.todoClickHandler}/>
        <TodoForm addFromBtn={this.addTodoBtnHandler} addFromInput={this.addTodoInputHandler} removeCompleted={this.removeCompletedBtnHandler}/>
      </div>
    );
  }
}

export default App;
