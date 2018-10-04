import React from 'react';

import TodoForm from './components/TodoComponents/TodoFormComponent/TodoForm';
import TodoList from './components/TodoComponents/TodoListComponent/TodoList';

import "./css/index.css"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      taskList : [],
      inputText : "",
      descriptionText : ""
    };
  }

  //generates random id for task
  randomIdGenerator = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  //event handler for when text is entered on form
  changeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name] : event.target.value});
  }
  
  //submits newly entered task
  addTask = event =>{
    event.preventDefault();
    console.log(event.target.name);
    this.setState({
      taskList: [
        ...this.state.taskList, 
        {id: this.randomIdGenerator(), task: this.state.inputText, descriptionText: this.state.descriptionText, complete: false}
      ],
      inputText: "",
      descriptionText: ""
    });
  }
  

  //enters newly entered tasks if enter pressed on form input
  enterTask = event => {

    let inputName = event.target.name;
    console.log(inputName);

    if(event.key === "Enter"){
      this.setState({
        taskList: [
          ...this.state.taskList, 
          {id: this.randomIdGenerator(), task: this.state.inputText, descriptionText: this.state.descriptionText, complete: false}
        ],
       inputText : "",
       descriptionText: ""
      });
    }
  }

  // taskCompleted = event => {
  //   event.preventDefault();
  //   console.log(event);
  // }

  // clearCompletedTasks = event =>{
  //   console.log(event.target);
  // }

  render() {
    return (
      <div>

        <TodoList taskData={this.state.taskList}   
        inputText={this.state.inputText}
        descriptionText={this.state.descriptionText}
        />

        <TodoForm changeHandler={this.changeHandler} 
          inputText={this.state.inputText}
          descriptionText={this.state.descriptionText}
          addTask= {this.addTask}
          enterTask = {this.enterTask}
        />
      </div>
    );
  }
}

export default App;
