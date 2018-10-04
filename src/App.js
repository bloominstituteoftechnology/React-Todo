import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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

  enterTask = event => {

    if(event.key === "Enter"){
      this.setState({
        taskList: [
          ...this.state.taskList, 
          {id: this.randomIdGenerator(), task: this.state.inputText, complete: true}
        ],
       inputText : ""
      });
    }
  }

  taskCompleted = event => {
    event.preventDefault();
    console.log(event);
  }

  clearCompletedTasks = event =>{
    console.log(event.target);
  }

  render() {
    return (
      <div>
        <TodoList taskData={this.state.taskList}   
        inputText={this.state.inputText}/>

        <TodoForm changeHandler={this.changeHandler} 
          inputText={this.state.inputText}
          addTask= {this.addTask}
          enterTask = {this.enterTask} />
      </div>
    );
  }
}

export default App;
