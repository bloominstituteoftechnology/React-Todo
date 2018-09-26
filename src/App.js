import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import Todo from './components/TodoComponents/Todo.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
     super();
     this.state = {
        todos: [ ]

     }
  }

  addTodo = (event) => {
  	  
  	 this.setState({
  	 	  todos: [...this.state.todos, {task: event.target.value, id: Date.now(), completed: false }]
  	 }); 
  	 // console.log(event.tare
  	 event.target.value = '';
  }

  buttonClick = (event) => {
  	 this.setState({
  	 	  todos: [...this.state.todos, {task: event.currentTarget.parentNode.firstChild.value,  id: Date.now(), completed: false }]
  	 }); 
  	 // console.log(event.tare
  	 event.currentTarget.previousElementSibling.value = '';

  }
  render() {
    return (
      <div className='todoContainer'>
       <h1>Todo List: MVP</h1>
       <Todo todos={this.state.todos}/>
       <TodoForm evenClick={this.addTodo} bClick={this.buttonClick}  />
      </div>
    );
  }
}

export default App;
