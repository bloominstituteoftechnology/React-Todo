import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
import './components/TodoComponents/Todo.css'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: [],
      inputTask: '',
    }
  }

// ^^^^ state storage ^^^^^ //



  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value });
  }

addNewTask = (event) => {
  event.preventDefault();
  if (this.state.inputTask === '') {
    return null
  }
  
  this.setState({ 
    todoData: [
      ...this.state.todoData, 
      {
      id: Date.now(),
      task: this.state.inputTask,
      completed: false,
      decoration: 'taskFontNone'}
    ],
    inputTask: ''
  })
}

changeBool = (index) => {
  this.setState({
    todoData: this.state.todoData.map((task, idx) => {
      if (index !== idx) {
        return task;
      } else {
        return {
          ...task,
          completed: task.completed === false ? true : false,
          decoration: task.decoration === 'taskFontNone' ? 'taskFont' : 'taskFontNone'
        }
      }
    })
  })
}

clearTask = (event) => {
  event.preventDefault();
  this.setState({
    todoData: this.state.todoData.filter((task) => !task.completed)})}



  render() {
  
    return (
      <div>
          <TodoForm 
        changeHandler={this.changeHandler}
        addNewTask={this.addNewTask}
        inputTask={this.state.inputTask}
        clearTask={this.clearTask}
        />
        
        <TodoList 
        taskData={this.state.todoData}
        changeBool={this.changeBool}
        
        />
      
      </div>
    );
  }
}

export default App;



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state