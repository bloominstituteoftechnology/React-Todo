import React, { Component }from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      id: Date.now(),
      completed: false,
      inputText: ''
    }
  }

  addTask = event => {
    event.preventDefault(); // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
    if(this.state.inputText) { // If not an empty string => (setState)
      this.setState({
        id: Date.now(),
        todos: [...this.state.todos, {inputText: this.state.inputText, completed: this.state.completed, id: this.state.id}],
        inputText: ''
      })
    } 
  }

  setInput = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  completedTask = id => {
    let completedTasks = this.state.todos.slice(); // Copy todos array
    completedTasks = completedTasks.map(task => {
      if (task.id === id) { // Change completed properties to true if id matches
        task.completed = !task.completed;
        return task;
      }
      return task; // Otherwise just return the item without modifying it
    })
    this.setState({ todos: completedTasks }); // Set the state of todos with modified completed properties
  }

  clearCompleted = event => {
    event.preventDefault();
    let uncompletedTasks = this.state.todos.slice();
    uncompletedTasks = uncompletedTasks.filter(task => !task.completed) // Return all tasks whose completed property is false (not yet completed)
    this.setState({ todos: uncompletedTasks }) // Set the state of todos to only tasks that have not been completed
  }

  clearTasks = () => {
    if (this.state.inputText) {
      this.setState({
        id: Date.now(),
        todos: [],
        inputText: ''
      })
    }
  }

  render() {
    return(
      <div>
        <h2>ToDoList: MVP</h2>
        <TodoForm
          addTask={this.addTask}
          inputText={this.state.inputText}
          setInput={this.setInput}
          clearCompleted={this.clearCompleted}
          clearTasks={this.clearTasks}
        />
        <TodoList 
        todos={this.state.todos} 
        completedTask={this.completedTask}
        />
      </div>
    )
  }
}

export default App;