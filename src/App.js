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
      newTask: '',
      
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
        ...this.state.tasks, { task: this.state.inputText } 
      ]
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

    return (

      <div>
        <TaskContainer  tasksProp = {this.state} />
        <TodoForm
         inputText = {this.state.inputText}
         inputTextHandler = {this.inputTextHandler}
         addNewTask = {this.addNewTask}
         />
      </div>
    );

  }
}

export default App;
