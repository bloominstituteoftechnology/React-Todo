import React from 'react';
import 'semantic-ui-css/semantic.min.css'

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
      list : toDoList
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
  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          list = {this.state.list} 
          toggleItem = {this.toggleItem}
          />
        <ToDoForm 
          addTask = {this.addTask}
          clearCompleted = {this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
