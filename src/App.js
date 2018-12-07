import React from 'react';
import ToDoList from './components/TodoComponents/TodoList.js';
import ToDoForm from './components/TodoComponents/TodoForm.js';
import './components/TodoComponents/Todo.css'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      condition: true
    };
  }


  createNewTodo = (text) => {
    if(text !== ""){
      const oldTodos = this.state.todos.slice()
      const newTodo = {
        task: text,
        id: Date.now(),
        status: true
      }
      oldTodos.push(newTodo)
      this.setState( { todos: oldTodos } )
    }
  }

  fullyCompleted = (currentSelected) => {
    // console.log(currentSelected)
    const oldTodosAgain = this.state.todos.slice()
    if(currentSelected.status === false) {
      oldTodosAgain.status = true;
    }

    this.setState( { todos:oldTodosAgain})
    // console.log(oldTodosAgain)
  }




  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList
          ToggleClass = {this.ToggleClass}

          todos={this.state.todos}/>

        <ToDoForm createNewTodo= { this.createNewTodo } />
      </div>
    );
  }
}

export default App;
