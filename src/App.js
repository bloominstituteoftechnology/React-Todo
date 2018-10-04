import React from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      taskList : [
          {
            id: this.randomIdGenerator(),
            task: "test",
            complete: false
          },
          {
            id: this.randomIdGenerator(),
            task: "test2",
            complete: false
          }
      ],
      inputText : "",
      newTask: ""
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
  }

  render() {
    return (
      <div>
        <Todo 
          taskData={this.state.taskList} 
          changeHandler={this.changeHandler} 
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}

export default App;
