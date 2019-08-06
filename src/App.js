import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"

import { Card, Button } from 'semantic-ui-react'
import "./components/TodoComponents/Todo.css"


const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state={
      todo: todoData
  }
}

  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo:[...this.state.todo, newItem]
    })
  }

  toggleItem = id => {
    console.log(id)
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }
  clearCompleted = () => {
    console.log('clear button')
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    })
  }
  

  render() {
    return (

        <div className="dashboard">
          
          <h2>Todo List</h2>
          <TodoForm 
            addItem={this.addItem}
            clearCompleted={this.clearCompleted} 
          />
          <TodoList 
            todo={this.state.todo}
            toggleItem={this.toggleItem}
            
          />
       </div>
     
    );
  }
}

export default App;
