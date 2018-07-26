import React from 'react';
import './index.css';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todoList: [{
        task: 'clean basement',
        id: Date.now(),
        completed: false
      }],
      emptyTask: '',
    };
  };

  handleInputChange = typeEvent => {
    this.setState({
      task: typeEvent.target.value
    });
  };

  handleButtonOnSumbit = buttonEvent => {
    buttonEvent.preventDefault(); //will stop the form from submitting the page
    const todoListCopy = this.state.todoList.slice();
    todoListCopy.push({
      task: this.state.task,
      id: Date.now(),
      completed: false
    });
    this.setState({
      todoList: todoListCopy
    });
  }

  render() {
    return (
      <div className="main-div">
        hello
        <br />

        <TodoList todoList={this.state.todoList} />
        <TodoForm handleButton={this.handleButtonOnSumbit} handleInput={this.handleInputChange} />
      </div>
    )
  }
}

export default App;
