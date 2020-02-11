import React from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
// import TodoList from './components/TodoComponents/TodoList';


const taskItems = [{}]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    taskItems:[],
    task: ''
  }

  constructor(){
    super()
    this.state = {
     taskItems 
    }
  }

addTask = item => {
  this.setState({
    taskItems:[
      ...this.state.taskItems,
      {name:item, completed:false, id:Date.now(), edit: item, taskEdit:null}
    ]
  })
  console.log({taskItems:item})
}
toggleComplete = id => {
  this.setState({
    taskItems: this.state.taskItems.map(item => 
      item.id === id ? {...item, completed: !item.completed} : item
  )
  })
  console.log(this.state.taskItems)
};
editItem = id => {
  this.setState({
  taskEditing: id, name: this.state.taskItems
  } )
  console.log({taskItems})

};

editChange = e => {
  this.setState({name: e.target.value})
}


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
      <TodoForm 
      addTask={this.addTask}
      removeCompleted={this.removeCompleted}
      
      />
    </div>
    <TodoList
    taskItems={this.state.taskItems}
    toggleComplete={this.toggleComplete}
    editItem={this.editItem}
    />

  </div>
  )
}

}

export default App;
