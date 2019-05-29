import React from 'react';
import {TodoList} from './components/TodoComponents/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todoText: TodoList,
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  newTodo = event =>{
    // console.log(event.target.value);
    this.setState ({
      todoText: [this.state.todoText, newTodo],
    })
  }
  handleChanges = event => {
    event.preventDefault();
    console.log(event);
  }
  render() {
    return (
      <TodoForm />
    );
  }
}

export default App;
