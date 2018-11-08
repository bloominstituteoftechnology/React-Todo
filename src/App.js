import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// import Confirm from './components/TodoComponents/Confirm';


let date = new Date();
const taskTimeStamp = date.toLocaleDateString('en-US');
const taskData = [
  {
    taskName: 'Add your first task', 
    timeStamp: taskTimeStamp, 
    completed: false, 
    color: 'white',
    id:0
  }
];

let nextId = 0;

const getNewId = () => {
  nextId += 1;
  return nextId;
}


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: taskData,
      timeStamp: taskTimeStamp,
      completed: false,
      color: 'white',
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
        {taskName: 
          this.state.inputText, 
          timeStamp: taskTimeStamp, 
          completed: false,
          color: 'white',
          id: getNewId()}
      ],
      inputText: ''
    })
  }

  clearAllTasks = event => {
    event.preventDefault();
    console.log('clear button was clicked')
    this.setState(this.baseState)
  }

  completeTask = id => {
    // console.log(`task ${this.task.id} marked as complete`);
    // this.classList.toggle('completed');
    this.setState({
      tasks: this.state.tasks.map(
        task => {
          if (task.id === id) {
            return{
              ...task,
              completed: task.completed === false ? true : false,
              color: task.color === 'white' ? 'red' : 'white'
            };
          } else {
            return task;
          }
        }
      )
    });
  };

  clearCompletedTasks = event => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(
        task => task.completed === false
      )
    });
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
          completeTask={this.completeTask}
        />
        <TodoForm 
          inputText={this.state.inputText}
          addTask={this.addTask}          
          handleChange={this.handleChange}
          clearAllTasks={this.clearAllTasks}
          clearCompletedTasks={this.clearCompletedTasks}
        />
      </div>
    );
  }
}

export default App;
