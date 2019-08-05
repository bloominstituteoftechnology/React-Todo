import React from 'react';
import 'semantic-ui-css/semantic.min.css'

import TodoList from './components/TodoComponents/TodoList'
import ToDoForm from './components/TodoComponents/TodoForm'

const toDoList = [

  {
    task : 'Organize Garage',
    id : '123',
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
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          list = {this.state.list} 
          />
        <ToDoForm 
          addTask = {this.addTask}
          />
      </div>
    );
  }
}

export default App;
