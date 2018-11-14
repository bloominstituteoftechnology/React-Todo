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
      backgroundColors: ['#2659b7', '#00a271', '#ffca05', '#714a91'],
      todoList: [
        {
          task: 'Wake-Up',
          id: 1528817077286,
          completed: false,
          backgroundColor: '#ffca05'
        },
        {
          task: 'Be Awesome',
          id: 1528817084358,
          completed: false,
          backgroundColor: '#2659b7'
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
          backgroundColor: this.state.backgroundColors[Math.floor(Math.random()*this.state.backgroundColors.length)]
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
        backgroundColor: this.state.backgroundColors[Math.floor(Math.random()*this.state.backgroundColors.length)]
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

  clearItem = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.completed === false)
    })
  }

  render() {
    return (
      <div>
        <TodoList userInput={this.state.userInput} todoList={this.state.todoList} handleSubmit={this.handleSubmit} buttonPressed={this.buttonPressed} enterPressed={this.enterPressed} strikeDone={this.strikeDone} clearItem={this.clearItem} />
      </div>
    );
  }
}

export default App;
