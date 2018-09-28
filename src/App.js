import React from 'react';
import ToDoList from '../src/components/TodoComponents/TodoList.js';
import TodoForm from '/Users/jamesbierly1/Desktop/React-Todo/src/components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  constructor() {
    super();

    this.state = {
      textInput:"",

      todos: [
        { id: 1, completed: true, task: "shop" },
        { id: 2, completed: false, task: "eat" },
        { id: 3, completed: true, task: "bathe" },
        { id: 4, completed: false, task: "dance" }
      ]
    };
  }
clickHandler(event){
  this.setState({id:Date.now(), completed: false, task: event.value})
}
handleInput = event => {
  console.log("hi");
  this.setState({
    textInput: event.target.value,
  
  });
};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList todolist={this.state.todos}/>
        <TodoForm/>

      </div>
    );
  }
}

export default App;
