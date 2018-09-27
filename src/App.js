import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      textInput: '',
      todos: []
    };
  }

  handleInput = (event) => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleClick = (event) => {
    
  }

  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm textInput={this.state.textInput} handleInput={this.handleInput} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state