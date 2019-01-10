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
          task: 'Build Death Star',
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

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          // this is the one we clicked on
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };
  


  

  

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <TodoList 
          todos = {this.state.todos}
          toggleCompleted = {this.toggleCompleted}
        />
        <TodoForm 
          clearCompleted = {this.clearCompleted}
          textInput = {this.state.textInput}
          handleInput = {this.handleInput}
          handleAdd = {this.handleAdd}
        />
      </div>
    );
  }
}

export default App;

