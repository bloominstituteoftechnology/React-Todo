import React, { useState , useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './to_do_list.scss'
import { Card } from 'semantic-ui-react'
import TodoList from './components/TodoComponents/TodoList'
import ToDoForm from './components/TodoComponents/TodoForm'

const toDoList = [

  {
    task : '',
    id : null,
    completed : false
  }

]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      list : toDoList,
      list : localStorage.getItem('list') === null ? [] : JSON.parse(localStorage.getItem('list'))
    }
  }

  addTask = taskName => {

    const newTask = {
      task : taskName,
      id : Date.now(),
      completed : false
    };

    this.setState({
      list : [...this.state.list, newTask]
    })
    
  }

  toggleItem = id => {

    this.setState({
      list : this.state.list.map( item => {
        if (item.id === id ) {
          return { ...item , completed : !item.completed}
        } else {
          return item;
        }
      })
    })

    
  }

  clearCompleted = () => {
    this.setState({
      list : this.state.list.filter(item => !item.completed)
    })
  }

  componentDidUpdate() {
    localStorage.setItem('list', JSON.stringify(this.state.list));
  }


  
  render() {
    return (
      <Card className = 'to-do-list'>
        <Card.Content className = 'header-container'>
          <Card.Header>React To-Do List</Card.Header>
        </Card.Content>
        <Card.Content className = 'items'>
          <TodoList 
            list = {this.state.list} 
            toggleItem = {this.toggleItem}
          />
        </Card.Content>
        <Card.Content className = 'form-container'>
        <ToDoForm 
          addTask = {this.addTask}
          clearCompleted = {this.clearCompleted}
          arrList = {this.state.list}
          />
        </Card.Content>
      </Card>
    );
  }
}

export default App;
