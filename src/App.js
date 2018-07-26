import React from 'react';
import './index.css';
import DisplayTodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  constructor () {
    super();
    this.state = { //sets initial state
      todoList0: [],
      emptyTask: '',
    };
  };

  handleInputChange = typingEvent => {
    this.setState({
      task2: typingEvent.target.value
    });
  };

  handleButtonOnSumbit = buttonEvent => {
    buttonEvent.preventDefault(); //will stop the form from submitting the page
    const todoListCopy = this.state.todoList0.slice();
    todoListCopy.push({
      taskFromCopy: this.state.task2,
      taskNumber: todoListCopy.length + 1,
      id: Date.now(),
      completed: false
    });
    this.setState({
      todoList0: todoListCopy
    });
  }

  render() {
    return (
      <div className="main-div">
        hello
        <br />
        <DisplayTodoList todoList0={this.state.todoList0} />
        <TodoForm handleButton={this.handleButtonOnSumbit} handleInput={this.handleInputChange} />
      </div>
    )
  }
}

export default App;
