import React from 'react';
import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      header: "To Do List: (click me)",
      editing: false,
      todos:
      [
        {
          task: 'Implement Displaying',
          id: 15566521651,
          completed: true,
        },
        {
          task: 'Implement Adding New',
          id: 156165198,
          completed: true,
        },
        {
          task: 'Implement Toggle Complete',
          id: 651581981,
          completed: true,
        },
        {
          task: 'Implement Remove Completed',
          id: 651581982,
          completed: true,
        },
        {
          task: 'Implement Styling',
          id: 351965109,
          completed: false,
        },

      ],
      inputField: "",
    };
  }
//39 is max letters at mobile, add check & fail state
  handleNewTodo = event => {
    if(this.state.inputField !== ""){
      const newTodos = this.state.todos.slice();
      newTodos.push({
        task: this.state.inputField,
        id: Date.now(),
        completed: false,
      });
      this.setState({
        todos: newTodos,
        inputField: "",
      });
    }
  }

  handleKeyPress = event => {
    if(event.key === "Enter"){
      this.handleNewTodo();
    }
  }

  handleInputChange = event => {
    let newInput = event.target.value;
    this.setState({
      inputField: newInput,
    });
  }

  handleCompleteTodo = event => {
    let prevTodos = this.state.todos.slice();
    let newTodos = prevTodos.filter(todo => todo.completed === false);
    this.setState({
      todos: newTodos,
    });
  }

  handleToggleComplete = targetID => {
    let todos = this.state.todos.slice().map(todo => {
      if(todo.id === targetID){
        let newTodo = {
          ...todo
        };
        newTodo.completed = !newTodo.completed;
        return newTodo;
      }
      return todo;
    });
    this.setState({
      todos: todos,
    });
  }

  handleHeaderChange = event =>{
    if(event.key === 'Enter' && event.target.value !== ""){
      let newHeading = event.target.value;
      this.setState({
        header: newHeading,
        editing: false,
     });
   }
  }

  render() {
    return (
      <div className="app-container">
        { this.state.editing ? <input className="header-input" type="text" onKeyPress={this.handleHeaderChange} onBlur={()=>this.setState({editing: false,})} autoFocus /> : <h3 className="todo-title" onClick={()=>this.setState({editing: true,})}>{this.state.header}</h3> }
        <TodoList list={this.state.todos} click={this.handleToggleComplete} />
        <TodoForm handleCompleted={this.handleCompleteTodo} text={this.state.inputField} handleEnter={this.handleKeyPress} change={this.handleInputChange} addClick={this.handleNewTodo} />
      </div>
    );
  }
}

export default App;
