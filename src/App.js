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
    if(this.state.inputText) {

    let newTodo = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    }

    this.setState({
     todoItems: [...this.state.todoItems, newTodo],
     inputText: ""
    }
   );

   localStorage.todoItems = JSON.stringify([...this.state.todoItems, newTodo]);
  }
 }

//  clearCompleted = (event) => {
//    event.preventDefault();
//    let todoItems = document.querySelectorAll('li');
//    let todoItemsState = [...this.state.todoItems];
//    todoItems.forEach(todoItem => {
//      if (todoItem.querySelector('input[type="checkbox"]').checked) {
//       todoItemsState.forEach(todoItemState => {
//         if(todoItemState.id == todoItem.id){
//           todoItemState.completed = true;
//         }});
//      }
//      localStorage.todoItems = JSON.stringify([...this.state.todoItems])
//    });

clearCompleted = (event) => {
   event.preventDefault();
   let todoItemsActive = this.state.todoItems.filter(todoItem => !todoItem.completed);

   this.setState({
    todoItems: [...todoItemsActive]
   });

   localStorage.todoItems = JSON.stringify([...todoItemsActive]);
 }

 clickCheck = (event) => {
      event.currentTarget.parentElement.querySelector('input').checked = !event.target.parentElement.querySelector('input').checked;
  }

  clickStore = (event) => {

    let todoItemsCompleted = this.state.todoItems.map((todoItem) => {
      console.log(event.currentTarget.id +" : "+ event.currentTarget.checked);
      console.log(todoItem);
      console.log(event.currentTarget.parentElement.id);
      if (todoItem.id === Number(event.currentTarget.parentElement.id)) {
        todoItem.completed = event.currentTarget.checked;
      }
      return todoItem;
    });
    console.log(todoItemsCompleted);
    this.setState({
    todoItems: [...todoItemsCompleted]
    })

    localStorage.todoItems = JSON.stringify([...todoItemsCompleted]);
  }

  render() {
    return (
      <div className="todo-container">
        <h2>Welcome to TodoAPP!</h2>
        <TodoList 
          todoItems={this.state.todoItems} 
          inputText={this.state.inputText} 
          updateInput={this.updateInput} 
          updateTodo={this.updateTodo} 
          toggleTodo={this.toggleTodo} 
          clearCompleted={this.clearCompleted} 
          clickCheck={this.clickCheck} 
          clickStore={this.clickStore}
        />
      </div>
    );
  }
}

export default App;
