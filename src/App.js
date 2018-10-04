import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import Header from './components/TodoComponents/Header.js';
import Avatar from './components/TodoComponents/Avatar.js';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      todos: [],
      inputText: '',
      newToDo:'',
      error: undefined
    } ;
  }


  addNewToDo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { 
          task: this.state.newToDo,
          id: Date.now(),
          completed: false,
        }
      ],
      newToDo: ''
    });
  };


  updateInput = event => {
    this.setState({ 
      newToDo: event.target.value,
    })
    };


  complete = (selectedId) => {
    let selected = this.state.todos.find(
       x => { return x.id === selectedId }
       );
      selected.completed = !selected.completed;
      this.setState({ todos: this.state.todos });
    }

  
  clearIt = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(x => x.completed === false)
    })
  }


  

   render () {
    console.log(this.state.todos)
     return(
     <div className="checklist-head">
    <Header />
    <Avatar />
     <h2>CHECKLIST ✓ </h2>

     <div className="todo-container">
  
        <TodoList 
        todos={this.state.todos} 
        complete={this.complete}

        />
        <TodoForm 
        inputText={this.state.newToDo}
        addNewTodo={this.addNewToDo} 
        updateInput={this.updateInput}
        newToDo = {this.state.newToDo}
        complete = {this.complete}
        clearIt={this.clearIt}
        error = {this.state.error}
        />
     </div>
     </div>

     )
    };
};

export default App;
