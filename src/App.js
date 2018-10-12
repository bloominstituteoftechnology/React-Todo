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
      
    }
  }


  inputTextHandler = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
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
         />
      </div>
    );

  }
}

export default App;
