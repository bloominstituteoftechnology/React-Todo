import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor(){
    if(!localStorage.todoItems){localStorage.todoItems = '[]'};
    super();
    this.state = {
      todoItems: JSON.parse(localStorage.todoItems),
      inputText: ""
    }
  }

 

  updateInput = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

 updateTodo = (event) => {
    event.preventDefault();
    let newTodo = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    }

    this.setState({
     todoItems: [...this.state.todoItems, newTodo],
     inputText: ""
   })
   localStorage.todoItems = JSON.stringify([...this.state.todoItems, newTodo]);
 }

 clearCompleted = (event) => {
   event.preventDefault();
   let todoItems = document.querySelectorAll('li');
   let todoItemsState = [...this.state.todoItems];
   todoItems.forEach(todoItem => {
     if (todoItem.querySelector('input[type="checkbox"]').checked) {
      todoItemsState.forEach(todoItemState => {
        if(todoItemState.id == todoItem.id){
          todoItemState.completed = true;
        }});
     }
     localStorage.todoItems = JSON.stringify([...this.state.todoItems])
   });

   this.setState({
    todoItems: [...todoItemsState]
   });

   console.log(this.state.todoItems);
 }

  render() {
    return (
      <div class="todo-container">
        <h2>Welcome to TodoAPP!</h2>
        <TodoList 
          todoItems={this.state.todoItems} 
          inputText={this.state.inputText} 
          updateInput={this.updateInput} 
          updateTodo={this.updateTodo} 
          toggleTodo={this.toggleTodo} 
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
