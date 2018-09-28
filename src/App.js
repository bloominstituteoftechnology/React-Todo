import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import "./App.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      input: "",
      todos: [
        {
          task: '',
          id: '',
          completed: false
        }
      ]
    }
  }
  toggleCompletedFlag = (todoId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === todoId) {
          return {
            task: item.task,
            id: item.id,
            completed: !item.completed,
          }
        }else{
          return item;
        }
      })
    })
  }
  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  addTodo = () => {
    let data = {
      task: this.state.input,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      input: "",
      todos: [...this.state.todos, data]
    })
  }
  removeCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return item.completed === !true;
      })
    })
  }
  render() {
    return (
      <div>
        <TodoList 
          state={this.state} 
          input={this.handleInput}
          text={this.state.input}
          add={this.addTodo} 
          remove={this.removeCompleted} 
          toggle={this.toggleCompletedFlag}
          displayStyle="flex"/>
      </div>
    );
  }
}

export default App;