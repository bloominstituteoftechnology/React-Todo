import React, {Component} from 'react';
import TaskContainer from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          task: 'Kundalini',
          id: Date.now(),
          completed: false,
        },
        {
          task: 'QiGong',
          id: Date.now(),
          completed: false,
        },
        {
          task: 'Bird ride',
          id: Date.now(),
          completed: false,
        }
      ], 

      inputText: '',

      todoList: [],
  
    }
  }


  inputTextHandler = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewTask = event => {
    event.preventDefault();
    this.setState({ 
      tasks: [
        ...this.state.tasks, { task: this.state.inputText, completed: false } 
      ]
    })
  }

  strikeOutTask = event => {
    event.target.style.textDecoration = "line-through";
    event.target.completed = true;
  }

  completedTask = event => {
    // console.log(event.target.value)
    event.preventDefault();
    let currentTasks = this.state.tasks.slice();
    currentTasks = currentTasks.filter(task => !task.completed);
    this.setState({ tasks: {currentTasks} });

  
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

    return (

      <div>
        <TaskContainer  todos = {this.state} completedTask={this.strikeOutTask}/>
        <TodoForm
         inputText = {this.state.inputText}
         inputTextHandler = {this.inputTextHandler}
         addNewTask = {this.addNewTask}
         completedTask = {this.completedTask}/>
      </div>
    );

  }
}

export default App;
