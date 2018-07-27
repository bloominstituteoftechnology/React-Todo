import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todos: [
        {task: 'Clean basement', 
        id: Date.now(), 
        completed: false}],
      task: ''
    }
  }

  handleTaskChange = e => {
    this.setState({ task: e.target.value})
  };

  addHandler = (e) => {
    e.preventDefault();
    const arr = this.state.todos.slice();

    arr.push(
      {
        task: this.state.task,
        id: Date.now(),
        completed: false
      }
    );
    this.setState({todos: arr, task: ''});
  }

  toggleListCompleteState = (id) => {
    const todos = this.state.todos.slice();
    todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        console.log(todo.completed);
        return todo;
      } else {
        return todo;
      }
    });
     this.setState({todos});
  };

  completedRemove = (e) => {
    e.preventDefault();
    let finished = this.state.todos.slice();
    finished = finished.filter(item => !item.completed)
    this.setState({todos: finished});
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  render() {
    return (
      <div>
        <h1>To Do List:</h1>
        <TodoList arr={this.state.todos} completedToggle={this.toggleListCompleteState} />
        <TodoForm add={this.addHandler} remove ={this.completedRemove} handleTask={this.handleTaskChange} value={this.state.task}/>
      </div>
    );
  };
};

export default App;
