import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import swal from 'sweetalert';

const data = [
  {
    id: 1, name: 'Learn React', isComplete: false
  },
  {
    id: 2, name: 'Learn Vue', isComplete: false
  },
  {
    id: 3, name: 'Learn Angular', isComplete: false
  },
  {
    id: 4, name: 'Learn Electron', isComplete: false
  },
  {
    id: 5, name: 'Learn Python', isComplete: false
  },
  {
    id: 6, name: 'Learn Swift', isComplete: false
  }
]

export default class App extends Component 
{
  constructor() {
    super();
    this.state = {
      todoList: data
    }
  }

// Add Task
  addNewTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      isComplete: false
    }
    this.setState({todoList: [...this.state.todoList, newTodo]});
    swal(`${newTodo.name} has been added to the list`, "You did it!", "success")
  }

  //Toggle
  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(item => {
      if(item.id === id) {
        return {
          ...item,
          isComplete: !item.isComplete
        };
      }
      else {
        return item;
      }
    });
    this.setState({todoList: newTodoList});
  }

  //Clear 
  clearCompleted = () => {
    const answer = window.confirm("Are you sure you want to clear the completed items?")
    if(answer) {
      const temp = this.state.todoList.filter(item => !item.isComplete)
      this.setState({todoList: temp});
    }
  }

  render() {
    return (
      <div className="App">
        <h2 className='Title'>Welcome to your Todo App!</h2>
        <TodoForm addNewTodo={this.addNewTodo} />
        <TodoList 
          todoItems={this.state.todoList} 
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
};