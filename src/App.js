import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super ();
    this.state = {
      textInput: '',
      todos: [
        {
          task: 'Make ToDo List',
          id: 1,
          completed: false
        },
        {
          task: 'Fill out Stand Up form',
          id: 2,
          completed: false
        }
      ]
    };
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      textInput:e.target.value
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    let id = Date.now();
    this.setState({
      todos: [
        ...this.state.todos,
      {task: this.state.textInput,
        id,
        completed: false
      
      }

      ],
      textInput: ''
    })
  }

  

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <TodoList 
          todos = {this.state.todos}
        />
        <TodoForm 
          textInput = {this.state.textInput}
          handleInput = {this.handleInput}
          handleAdd = {this.handleAdd}
        />
      </div>
    );
  }
}

export default App;

