import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      userInput: '',
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  enterPressed = event => {
    if(event.which === 13) {
      this.setState({
        userInput: '',
        todoList: this.state.todoList.concat({
          task: event.target.value,
          id: Date.now(),
          completed: false
        }) 
      });
    }
  }

  handleSubmit = event => {
    this.setState({
      userInput: event.target.value
    });
  }

  buttonPressed = event => {
    this.setState({
      userInput: '',
      todoList: this.state.todoList.concat({
        task: this.state.userInput,
        id: Date.now(),
        completed: false
      }) 
    });
  }


  // markDone = event => {
  //   this.setState({

  //   })
  // }

  render() {
    return (
      <div>
        <TodoList userInput={this.state.userInput} todoList={this.state.todoList} handleSubmit={this.handleSubmit} buttonPressed={this.buttonPressed} enterPressed={this.enterPressed} markDone={this.markDone}/>
      </div>
    );
  }
}

export default App;
