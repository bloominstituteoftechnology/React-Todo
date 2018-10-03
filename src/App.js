import React from 'react';
import ToDoList from './components/ToDoComponents/ToDoList.js';
import ToDoForm from './components/ToDoComponents/ToDoForm.js';

class App extends React.Component {

//-- Setup and State -----------------------------
  constructor(init) {
    super(...arguments);
    this.state = {
      inputText: '',
      toDoList: []
    };
  }

//-- Rendering -----------------------------------
  render() {
    return (
      <div>
        <h2>To Do List: MVP!</h2>
        <ToDoList
          toDoList={this.state.toDoList}
          handleToggle={this.toggleToDo}
        />
        <ToDoForm
          inputValue={this.state.inputText}
          handleChange={this.changeInput}
          handleAdd={this.add}
          handleClear={this.clear}
        />
      </div>
    );
  }
  
//-- Event Handlers ------------------------------
  add = eventClick => {
    eventClick.preventDefault();
    const newTask = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      inputText: '',
      toDoList: [...this.state.toDoList, newTask]
    });
  }

  clear = eventClick => {
    eventClick.preventDefault();
    let remainingTasks = [];
    this.state.toDoList.forEach(toDo => {
      if(!toDo.completed){
        remainingTasks.push(toDo);
      }
    });
    this.setState({
      toDoList: remainingTasks
    });
  }

  toggleToDo = eventClick => {
    eventClick.preventDefault();
    let taskId = eventClick.target.dataset.taskid;
    let task = this.state.toDoList.find(toDo => {
      return (toDo.id.toString() === taskId.toString());
    });
    task.completed = !task.completed;
    this.setState({
      toDoList: [...this.state.toDoList]
    });
  }

  changeInput = eventChange => {
    //eventChange.preventDefault();
    this.setState({
      inputText: eventChange.target.value
    });
  }
}

//------------------------------------------------
export default App;
