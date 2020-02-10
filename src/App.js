import React from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
// import TodoList from './components/TodoComponents/TodoList';
const taskItems=[ {
  name:'Walk Dog',
  id: 1234,
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
      taskItems
    }
}

addTask = task => {
  this.setState({
    taskItems:[
      ...this.state.taskItems,
      {name: task, completed:false, id: Date.now()}
    ]
  })
}
toggleComplete = id => {
  this.setState({
    taskItems: this.state.taskItems.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
  )
  })
};

removeCompleted = () => {
  this.setState({
    taskItems: this.state.taskItems.filter(task => !task.completed)
  })
}

render() {
  return (
  <div className='App'>
    <div className='header'>
      <h1>To do list</h1>
      <TodoForm addTask={this.addTask}/>
    </div>
    <TodoList
    taskItems={this.state.taskItems}
    toggleComplete={this.toggleComplete}
    />
    <button onClick={this.removeCompleted}>Clear Task</button>
  </div>
  )
}

}

export default App;
