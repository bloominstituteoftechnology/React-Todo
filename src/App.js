import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


const toDo = [
  {
    task: 'Clean the House',
    id: 123,
    completed: false},

    {task: 'Do the dishes',
    id: 1234,
    completed: false},

    {task: 'Washing Laundry',
    id: 234,
    completed: false},

    {task: 'Go to school',
    id: 345,
    completed: false},

]


class App extends React.Component {
  //you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

state = {
    toDo : []
  }




handleItemToggle = (itemId) => {
  this.setState ({
    toDo : this.state.toDo.map(item =>{
      if (item.id === itemId) {
        return {...item, completed: !item.completed}
      }
      return (item)
    })
  })
}

handleItemAdd = (itemTask) => {
  const item = {
    task: itemTask,
    id: Date.now(),
    completed: false,
  };

  const newToDo = [...this.state.toDo, item]

  this.setState({
    toDo : newToDo
  })
}

handleItemCompleted = () => {
  const newToDo = this.state.toDo.filter((item) => {
    return (!item.completed)
});

this.setState({
    toDo : newToDo
})
}

  render() {
    return (
      <div className = 'App'>
        <div>
          <h1>Use This List And Do Some Chores!</h1>
          <h3>To Do List</h3>
          <TodoForm handleItemAdd ={this.handleItemAdd} />
        </div>
        <TodoList toDo={this.state.toDo} handleItemCompleted={this.handleItemCompleted}
        handleItemToggle={this.handleItemToggle} />
        </div>
    );
  }
}


export default App;
