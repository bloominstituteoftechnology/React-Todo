import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoError from './components/TodoComponents/TodoError.js';
import './components/TodoComponents/Todo.css';

const taskList = [
  {
    task: 'Organize Garage',
    id: 3216548345891,
    completed: false
  },
  {
    task: 'Finish Project',
    id: 1597531578144,
    completed: false
  },
];

let error = 0;




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskList:taskList,
      error: error
    };

  }

  finishTask = id => {
    this.setState({
      taskList: this.state.taskList.map(item => {
        if (id === item.id){
          console.log('it was clicked!', item.completed); //proof it was clicked and what was the value before the click
          return{
            ...item,
            completed: !item.completed //if the item is not completed complete it and vice versa
          };
        }
        return item;
      })
    });
  };

  addTask = taskText => {
    let testTask = this.state.taskList.filter(item => {
      return item.task===taskText;
    })
    console.log("testTask Length: ",testTask.length);

    if(testTask.length > 0){
      this.setState({error: 1}); //a repeat has been detected!
    } else {
      const newTask = {
        task: taskText,
        completed: false,
        id: Date.now()
      };

      this.setState({
        taskList: [...this.state.taskList, newTask],
        error: 0
      });
    }
  };

  clearTask = id =>{
    this.setState({
      taskList: this.state.taskList.filter(item => {
        return item.completed===false;
      })
    })


  }

  render() {

    console.log(error);
    console.log("error: ", this.state.error)
    return (
      <div className="App">
        <div className="header">
          <h1> To Dos..</h1>
        </div>
        <br />
        <div className="list-body">
          <TodoList
            taskList = {this.state.taskList}
            finishTask = {this.finishTask}
          />
          <br />
          <TodoForm
            addTask = {this.addTask}
            clearTask = {this.clearTask}

          />
          <TodoError
            error = {this.state.error}
          />

        </div>


      </div>
    );
  }
}

export default App;
