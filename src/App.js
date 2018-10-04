import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';



class App extends React.Component {
  constructor() {
    super();
    this.state ={
      todos: [
  
      ],
      inputText: '',
      newToDo:''
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
          completed: false
        }
      ],
      newToDo: ''
    });
  };


  updateInput = event => {
    this.setState({ newToDo: event.target.value })
    };


  complete = (selectedId) => {
    let selected = this.state.todos.find(
       x => { return x.id === selectedId }
       );
      selected.completed = !selected.completed;
      this.setState({ todos: this.state.todos });
    }
  
  clearIt = event => {
    // event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(x => x.completed === false)
    })
  }

   render () {
    console.log(this.state.todos)
     return(
     <div>
     <h2>Todo List: MVP</h2>
        <TodoList 
        todos={this.state.todos} 
        />
        <TodoForm 
        inputText={this.state.newToDo}
        addNewTodo={this.addNewToDo} 
        updateInput={this.updateInput}
        newToDo = {this.state.newToDo}
        complete = {this.complete}
        clearIt={this.clearIt}
        />
     </div>
     )
    };
};

export default App;
