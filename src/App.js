import React from 'react';
import ReactDOM from 'react-dom'; 

import TodoList from './components/TodoComponents/TodoList'; 
import TodoForm from './components/TodoComponents/TodoForm'; 
import './components/TodoComponents/Todo.css';
import todoIcon from './components/TodoComponents/img/icon.png'

const todo = [
  {
    id: 0, 
    task: 'Add Todo Items!',
    completed: false, 
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  state = {
    todoList: todo, 
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addNewItem = newItemName => {
    const newState = {
      ...this.state, 
      todoList: [
        ...this.state.todoList,
        { id: Date.now(), task: newItemName, completed: false }
      ]
    }; 
    this.setState(newState); 
  }; 

  toggleCompleted = id => {
    const newState = {
      ...this.state, 
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item, 
            completed: !item.completed
          };
        }
        return item; 
      })
    }; 
    this.setState(newState); 
  }; 

  clearTodo = () => {
    const newState = {
      ...this.state, 
      todoList: this.state.todoList.filter(item => {
        return !item.completed; 
      })
    }; 
    this.setState(newState); 
  }; 

  render() {
    return (
      <div className="App">
        <div className="Banner"> 
         {/* <img src={todoIcon} alt='Todo Icon' height="50" width="50"/> */}
        Reactive Todos 
        </div>
        <div className="TodoCard">
          <TodoList 
            todo = {this.state.todoList}
            toggleCompleted = {this.toggleCompleted}
            clearTodo = {this.clearTodo}
          />

          
        </div>
        <div className="addTodo">
          <TodoForm addNewItem = {this.addNewItem} />
        </div>
      </div>
    );
  }
}

export default App;
