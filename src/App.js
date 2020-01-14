import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'

const todos = [
  {
    name: 'Clean Room',
    id: 123,
    completed: false
  },
  {
    name: 'Brush Teeth',
    id: 124,
    completed: false
  },
  {
    name: 'Study React',
    id: 1235,
    completed: false
  }

];


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    // initialize the state object
    this.state = {
      todoList: todos
    };
  }
  //build a class method to update our state 
  //this is different than doing it inside a function 
  toggleItem = id => {
    //we want to find the item we clicked on 
    //toggle the done field
    //update state with the new todo data 
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    //update state with the new todo data 
    this.setState({
      todoList: newTodoList
    });
  };
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  clearCompleted = completed => {
    const newListCleared = this.state.todoList.filter(item => 
      item.completed === false
    )
    this.setState({
      todoList: newListCleared
    });
  }



  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoForm addItem={this.addItem}  />
        <TodoList todos={this.state.todoList} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted}  />

      </div>
    );
  }
}

export default App;
