import React from 'react';
import TodoList from './components/TodoList'

import TodoForm from './components/TodoForm'

const objectiveToday = [
  {
    name: 'Workout',
    id: 123,
    completed: false
  },
  {
    name: 'Study',
    id: 321,
    completed: false
  },
  {
    name: 'Attend meeting',
    id: 231,
    completed: false
  }, 
  {
    name: 'Enjoy family time',
    id: 132,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
  super();
  this.state = {
    objectiveToday: objectiveToday
  }
}

toggleCompleted = (objId) => {
  const newObjective = this.state.objectiveToday.map(obj => {
    if(objId === obj.id) {
      return {
        ...obj,
        completed: !obj.completed
      }
    }
    else { return obj; }
  })
  this.setState({
    ...this.state,
    objectiveToday: newObjective
  })
}

addTodo = (todoName, e) => {
  e.preventDefault();
  const newTodo ={
    name: todoName,
    id: Date.now(),
    completed: false
  }
  this.setState({
    ...this.state,
    objectiveToday: [...this.state.objectiveToday, newTodo]
  })
}

clearCompleted = () => {
  console.log('clearing');
  this.setState({
    objectiveToday: this.state.objectiveToday.filter(obj => obj.completed)
  })
}

  render() {
    return (
      <div>
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} objectiveToday={this.state.objectiveToday} />
      </div>
    );
  }
}

export default App;
