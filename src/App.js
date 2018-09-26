import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
      ],
      holder: '',
    }
  }
    inputHandler = (event) => {
      const value = event.target.value;
      this.setState({
        holder: value
      })
      console.log(value)
    }
    clickHandler = (event) => {
      event.preventDefault()
      
      const newObject = {
        task: this.state.holder,
        id: Date.now(),
        completed: false
      }
      console.log(newObject)
      this.setState({
        todos: [...this.state.todos, newObject], holder: ''
      })
      console.log(this.state.todos)
    }
  
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm holder={this.state.holder} inputHandler={this.inputHandler} clickHandler={this.clickHandler} />


      </div>)

  }
}

export default App;
