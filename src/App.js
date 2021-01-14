import React from 'react';
import Todo from './components/Todo';

//import Todo from "./components/Todo"
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './components/Todo.css'
import { createPortal } from 'react-dom';

const todo = [
  {
    name: 'Study Class Components',
    id: 1979,
    completed: false
  },
  {
    name: 'Homeschool the spawn',
    id: 1980,
    completed: false
  },
  {
    name: 'prepare sustenance to avoid the hangry',
    id: 1981,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      //todo: todo
      todo
    }
  }

  toggleCompleted = todoId =>{
    console.log("SV: app.js: app: toggleCompleted: itemId", todoId)
    this.setState( {
      ...this.state,
      todo: this.state.todo.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  addItem = (itemName) => {
    this.setState( {
      todo: [
        ...this.state.todo, 
        {name: itemName, completed: false, id: Date.now() }]
    })
  }

  clearCompleted = () => {
    //set state to clear purchased items
    this.setState( {
       todo: this.state.todo.filter(item => {
         return !item.completed;
       })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo App</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
         todo={this.state.todo} 
         toggleCompleted={this.toggleCompleted}
         clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;