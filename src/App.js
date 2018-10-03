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
        { task: this.state.newToDo}
      ],
      newToDo: ''
    });
  };


  updateInput = event => {
    this.setState({ newToDo: event.target.value })
    };

  
  clearIt = event => {
    event.preventDefault();
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
        clearIt={this.clearIt}
        />
     </div>
     )
    };
};

export default App;
