import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: [
        {
          id: 1,
          task: 'Get data to render to screen',
          completed: false,
          decoration: 'taskFontNone'
        },
        {
          id: 2,
          task: 'map over data so all items in the array render',
          completed: false,
          decoration: 'taskFontNone'
        },
      ],

      inputTask: '',
    }
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value });
  }

addNewTask = (event) => {
  event.preventDefault();
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
      console.log(idx)
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



  render() {
  
    return (
      <div>
          <TodoForm 
        changeHandler={this.changeHandler}
        addNewTask={this.addNewTask}
        inputTask={this.state.inputTask}
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