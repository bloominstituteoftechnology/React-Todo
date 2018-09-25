import React from 'react';
import TodoForm from '../src/components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
  super(); 
  
    this.state = {
      input: " ", 
      todos: [
        { list: " ", id: 0, completed: false }
      ] 
    }
  }

  clickHandler = (event) => {
     this.setState({
       task: event.target.value,
       id: Date.now()
    })
  }

  inputHandler = (event) =>{
    this.setState({
      input: event.target.value
    })
  }

  render(event) {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
