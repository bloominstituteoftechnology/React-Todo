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
    // console.log(this.state)
    this.setState({
      task2: typingEvent.target.value,
      inputValue: typingEvent.target.value,
      completed: false
    });
  };

  handleDestroyButtonOnSumbit = destroyEvent => {
    destroyEvent.preventDefault();
    this.setState({
      todoList0: []
    });
  };

  handleDeleteButtonOnSumbit = deleteEvent => {
    deleteEvent.preventDefault();
    const todoListCopy = this.state.todoList0.slice();
    todoListCopy.pop();
    this.setState({
      todoList0: todoListCopy
    });
  };

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
      inputValue: '', //resets input field
      task2: '' //resets task2
    });
  }

  markComplete = (id, event) => {
    console.log("markComplete envoked");
    console.log(id);

    let copy = this.state.todoList0.map( (each) => {
      if (each.id === id) each.completed = !each.completed; //the band (!) toggles the true to false and false to true
      return each;
    })
    this.setState({todolist0: copy})
  }

  handleDeleteCompletedButtonOnSubmit = (e) => {
    e.preventDefault();
    console.log("put together a")
  }

  render() {
    return (
      <div className="main-div">
        <h1>Todo List</h1>
        <br />
        <div className="lower-div">
          <TodoForm
            handleDestroyButton={this.handleDestroyButtonOnSumbit}
            handleAddButton={this.handleAddButtonOnSumbit}
            handleDeleteButton={this.handleDeleteButtonOnSumbit}
            handleDeleteCompletedButton={this.handleDeleteCompletedButtonOnSubmit}
            handleInput={this.handleInputChange}
            inputValue={this.state.inputValue}
            reset={this.resetForm} />
          <DisplayTodoList
            complete={this.markComplete} todoList0={this.state.todoList0} />
        </div>

      </div>
    )
  }
}

export default App;
