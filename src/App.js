import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const tasks = [
  {
    name: '30 minutes of exercise',
    id: 1528817077286,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state = {
    tasks: tasks
  }
}

handleItemToggle = (itemId) =>{
  this.setState({
    tasks: this.state.tasks.map(item=>{
      if(item.id === itemId){
        return {
          ...item,
          completed: !item.completed
        }
      }
      return(item)
    })
  })
}

handleItemAdd = (itemName) =>{
  const item = {
    name: itemName,
    id: this.state.tasks.length,
    completed: false
  }
  const newTasks = [...this.state.tasks, item]

  this.setState({
    tasks: newTasks
  })
}

handleItemClear = () =>{
  const newTasks = this.state.tasks.filter(item=>{
    return (!item.completed)
  })
  this.setState({
    tasks: newTasks
  })
}

  render() {
    return (
      <div>
        <h2>Will's Todo App!</h2>
        <TodoForm handleItemAdd={this.handleItemAdd}/>
        <TodoList tasks={this.state.tasks} handleItemClear={this.handleItemClear} handleItemToggle={this.handleItemToggle}/>
      </div>
    );
  }
}

export default App;
