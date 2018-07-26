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
      inputValue: ''
    };
  };

  handleInputChange = typingEvent => {
    console.log(this.state)
    this.setState({
      task2: typingEvent.target.value,
      inputValue: typingEvent.target.value
    });
  };

  handleDestroyButtonOnSumbit = destroyEvent => {
    destroyEvent.preventDefault();
    this.setState({
      todoList0: []
    })
  }

  handleDeleteButtonOnSumbit = deleteEvent => {
    deleteEvent.preventDefault();
    const todoListCopy = this.state.todoList0.slice();
    todoListCopy.pop();
    this.setState({
      todoList0: todoListCopy
    });
  }

  // resetForm = e => {
  //   this.setState({
  //     inputValue: ''
  //   })
  // }

  handleAddButtonOnSumbit = buttonEvent => {
    buttonEvent.preventDefault(); //will stop the form from submitting the page
    const todoListCopy = this.state.todoList0.slice();
    todoListCopy.push({
      taskFromCopy: this.state.task2,
      taskNumber: todoListCopy.length + 1,
      id: Date.now(),
      completed: false
    });
    this.setState({
      todoList0: todoListCopy,
      inputValue: ''
    });

    // this.resetForm();
  }

  render() {
    return (
      <div className="main-div">
        <h1>Todo List</h1>
        <br />
        <DisplayTodoList todoList0={this.state.todoList0} />
        <TodoForm
          handleDestroyButton={this.handleDestroyButtonOnSumbit}
          handleAddButton={this.handleAddButtonOnSumbit}
          handleDeleteButton={this.handleDeleteButtonOnSumbit}
          handleInput={this.handleInputChange}
          inputValue={this.state.inputValue}
          reset={this.resetForm} />
      </div>
    )
  }
}

export default App;
