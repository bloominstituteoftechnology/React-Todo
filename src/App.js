import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';


class App extends React.Component {
  constructor() {
    super();
    this.state ={
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        }
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
    this.setState({ [event.target.name]: event.target.value })
    };


   render () {
    console.log(this.state.todos)
     return(
     <div>
     <h2>Welcome to your Todo App!</h2>
        <TodoList 
        todos={this.state.todos} 
        />
        <TodoForm 
        inputText={this.state.newToDo}
        addNewTodo={this.addNewToDo} 
        updateInput={this.updateInput}
        newToDo = {this.state.newToDo}
        />
     </div>
     )
    };
};

export default App;
