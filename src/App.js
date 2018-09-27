import React, {Component} from 'react';
import Form from './components/TodoComponents/TodoForm'
import List from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      input: '',
      todolist: [],
    };
  }

  handleInput = (event) => {
    const {value} = event.target;
    this.setState({
      input: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todolist: [...this.state.todolist, obj],
      input: '',
    })
  };

  completeOrNot = (element) => {
    let currentToDo = element.target;
    let todos
  }


  render() {
    return (
      <div>
        <h2>Oh god it's another todo app</h2>
        <List todolist={this.state.todolist} />
        <Form 
          input={this.state.input} 
          handleSubmit={this.handleSubmit} 
          handleInput={this.handleInput} 
        />
      </div>
    );
  }
}

export default App;