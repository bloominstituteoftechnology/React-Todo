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
    toggleClass = (event) => {
      event.target.classList.add('completed');
    } 
    inputHandler = (event) => {
      const { value } = event.target;
      this.setState({
        holder : value
      })
    }
    clickHandler = (event) => {
      event.preventDefault();
      const dumbObject = {
        task: this.state.holder,
        id: Date.now(),
        completed: false,
      }
      this.setState(
        {tasks : [...this.state.tasks, dumbObject,], holder: ""}
      )     
    }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoList tasks={this.state.tasks} toggleClass={this.toggleClass} />
        <TodoForm value={this.state.holder} inputHandler={this.inputHandler} clickHandler = {this.clickHandler} />
      </div>
    );
  }
}

export default App;
