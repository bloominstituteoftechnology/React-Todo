import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// import Confirm from './components/TodoComponents/Confirm';



const taskData = [];
const taskTimeStamp = Date.now();
// let completedTask = false;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: taskData,
      timeStamp: taskTimeStamp,
      completed: false,
      inputText: '',
    };
    this.baseState = this.state
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addTask = event => {
    event.preventDefault();
    this.setState({
      tasks: [
        ...this.state.tasks,
        {taskName: this.state.inputText},
        {timeStamp: this.state.timeStamp},
        {completed: this.state.completed}
      ],
      inputText: ''
    })
  }

  clearAllTasks = event => {
    event.preventDefault();
    console.log('clear button was clicked')
    this.setState(this.baseState)
  }

  completedTask = () => {
    console.log('task clicked');
    this.style.textDecoration = 'line-through';
    this.classList.toggle('completed');
    this.setState({
      completed: true
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList 
          tasks={this.state.tasks}
          timeStamp={this.state.timeStamp}
        />
        <TodoForm 
          inputText={this.state.inputText}
          addTask={this.addTask}          
          handleChange={this.handleChange}
          clearAllTasks={this.clearAllTasks}
        />
      </div>
    );
  }
}

export default App;
