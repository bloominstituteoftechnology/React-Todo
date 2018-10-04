import React from 'react';
import Todo from './components/TodoComponents/Todo';

import "./components/TodoComponents/Todo.css"
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      randomId : this.randomIdGenerator(),
      taskList : [],
      inputText : "",
    };
  }

  randomIdGenerator = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name] : event.target.value});
  }
  
  addTask = event =>{
    event.preventDefault();
 
    this.setState({
      taskList: [
        ...this.state.taskList, 
        {id: this.randomIdGenerator(), task: this.state.inputText, complete: true}
      ],
     inputText : ""
    });

   
  }

  taskCompleted = event => {
    event.preventDefault();
    console.log(event);
  }

  clearCompletedTasks = event =>{
    console.log(event.target);
    // if(this.state.taskList.completed === true){
    //   this.setState({taskList: []});
    // }
  }

  render() {
    return (
      <div>
        <Todo 
          taskData={this.state.taskList} 
          changeHandler={this.changeHandler} 
          inputText={this.state.inputText}
          addTask= {this.addTask}
          taskComplete = {this.taskCompleted}
          clearTasks = {this.clearCompletedTasks}
        />
      </div>
    );
  }
}

export default App;
