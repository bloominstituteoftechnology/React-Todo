import React, { Component } from 'react';

import { ToDoForm } from './components/ToDoForm'
import { ToDoList } from './components/ToDoList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputTextValue: '',
      toDoListTasks: {},
    };
    
  }


  // submit new task
  handleAddTask = () => {
    if(!this.state.inputTextValue){
      alert('No task!');
    }
    else{
      this.setState({
        toDoListTasks: [
          this.state.inputTextValue,
          ...this.state.toDoListTasks
        ]
      });
    }

    console.log(this.state.toDoListTasks)
  };

  //handles text input value
  handleInputChange = e => {
    this.setState({
      inputTextValue: e.target.value,
    });
  }


  render() {
    return( 
      <div>
          <h2>Todo App</h2>

          <ToDoForm 
            inputTextValue={ this.state.inputTextValue }
            handleAddTask={ this.handleAddTask }
            handleInputChange={ this.handleInputChange }
          />

          <ToDoList 
            toDoTask={ this.state.toDoListTasks }
          />
        </div>
      );
  };
};
 

export default App;
