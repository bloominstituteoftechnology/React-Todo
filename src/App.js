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
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
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
          completed: false,
        }) 
      });
    }
  }

  buttonPressed = () => {
    this.setState({
      userInput: '',
      todoList: this.state.todoList.concat({
        task: this.state.userInput,
        id: Date.now(),
        completed: false,
      }) 
    });
  }

  handleSubmit = event => {
    this.setState({
      userInput: event.target.value
    });
  }

  strikeDone = (id) => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if(todo.id === id && todo.completed === false) {
          return {
            task: todo.task,
            id: todo.id,
            completed: true
          }
        } else if(todo.id === id && todo.completed === true) {
          return {
            task: todo.task,
            id: todo.id,
            completed: false
          }
        } else {
          return todo
        }
      })
    })
  }

  clearList = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.completed === false)
    })
  }

  render() {
    return (
      <div>
        <TodoList userInput={this.state.userInput} todoList={this.state.todoList} handleSubmit={this.handleSubmit} buttonPressed={this.buttonPressed} enterPressed={this.enterPressed} strikeDone={this.strikeDone} clearList={this.clearList} />
      </div>
    );
  }
}

export default App;
