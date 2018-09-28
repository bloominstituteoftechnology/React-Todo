import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        tasks: [],
        holder: "",
      }
    }
    toggleClass = (event, id) => {
      event.target.classList.toggle('completed');
      this.setState({
        tasks: this.state.tasks.map(task => {
          if (task.id === id) {
            return {
              task: task.task,
              id: task.id,
              completed: !task.completed
            }
          } else {
            return task
          }
        })
      })
    }
    deleteHandler = () => {
      this.setState({
        tasks : this.state.tasks.filter(task => task.completed === false)
      })
    }  
    inputHandler = (event) => {
      const { value } = event.target;
      this.setState({
        holder : value
      })
    }
    clickHandler = (event) => {
      event.preventDefault();
      const obj = {
        task: this.state.holder,
        id: Date.now(),
        completed: false,
      }
      this.setState(
        {tasks : [...this.state.tasks, obj,], holder: ""}
      )     
    }
  render() {
    return (
      <div className="app">
        <h1>Rob's Todo App!</h1>
        <TodoList tasks={this.state.tasks} toggleClass={this.toggleClass} />
        <TodoForm deleteHandler={this.deleteHandler} value={this.state.holder} inputHandler={this.inputHandler} clickHandler = {this.clickHandler} />
      </div>
    );
  }
}

export default App;
