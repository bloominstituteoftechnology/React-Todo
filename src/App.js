import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js'; 
import styled from 'styled-components';

const AppContainerStyles = styled.div`
  margin-top: 50px;
  margin-bottom:50px;
  max-width: 800px;
  min-height: 500px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction:column;
  background-color: #202020;
  color: white;
  align-items:center;
  border:4px solid #1F1C1E; 
  border:none;
    
`

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoEntries: [
        {
          task: "Todo: Click todo text to mark as completed",   // the todo title that will be shown to the user.
          id: "1",  // a unique Time Stamp that will be assigned by Date.now().
          completed: false //field should default to false and will be the field that we toggle when we complete a todo
        }, 
      ],

      todoEntry: {
        task: "",
        id:"",
        completed:""
        }
    }
  }


  addTodoEntry = (e) => {
    e.preventDefault();
    const todoEntries = this.state.todoEntries.slice(); 
    const todoEntry = {
      task: this.state.todoEntry.task, 
      id: Date.now(), 
      completed: false
    }
    const todoEntryBlank = {
      task: "",
      id:"",
      completed: false
      }
    todoEntries.push(todoEntry); 
    this.setState({todoEntries: todoEntries, todoEntry: todoEntryBlank});
  }

  addTodoHandler = event => {
    console.log(event.target.value); 

    this.setState({todoEntry: {
      task: event.target.value, 
      id: Date.now(),
      completed: false
      }})
  };

  // removeCompletedTodosHandler = () => {

  // }

  removeCompletedTodos = () => {
    console.log("invoked")
    const todoEntriesCopy = this.state.todoEntries.slice();
    console.log(todoEntriesCopy)
    const uncompletedTodoEntries = todoEntriesCopy.filter(todoEntry => 
      todoEntry.completed === false
    )
    console.log(uncompletedTodoEntries)
    this.setState({todoEntries: uncompletedTodoEntries})
  }

  // Add the functionality to toggle your todo's completed flag from false to true.
  // Once a todo is completed, be sure to demonstrate to the user that the todo is completed 
  // by adding a line-through style property if the completed flag is true.

  todoCompletedToggle = (todoEntryId) => {
      const todoEntriesCopy = this.state.todoEntries.slice();
      for (let i = 0; i < todoEntriesCopy.length; i++) {
        if (todoEntriesCopy[i].id === todoEntryId) {
          todoEntriesCopy[i].completed = !todoEntriesCopy[i].completed;
        }
      }
      return this.setState({todoEntries: todoEntriesCopy})
  }

  


  render() {
    return (
      <AppContainerStyles> 
          {/* <h1>Simple To-do App</h1> */}

          <TodoForm 
            todoEntry = {this.state.todoEntry}
            addTodoHandler = {this.addTodoHandler}
            addTodoEntry = {this.addTodoEntry}
            removeCompletedTodos = {this.removeCompletedTodos}
          />

          {/* <h2> List of Todo Tasks </h2> */}
        
          <TodoList 
            todoEntries = {this.state.todoEntries}
            todoCompletedToggle = {this.todoCompletedToggle}
          />
      </AppContainerStyles>

    );
  }
}

export default App;