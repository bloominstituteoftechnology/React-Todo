import React from 'react';

import TodoList from './components/TodoList'

const tasks = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super()
    this.state = {
      tasks:tasks
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleClear = () => {
    // console.log(id)
    // console.log(this.state.tasks)
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed === false)
    })
  }

  handleSubmit = (taskName) => {
    // console.log(this.state.tasks)
    // console.log(typeof this.state)
    this.setState({
      tasks: [...this.state.tasks, {
        task:taskName,
        id: Date.now(),
        completed: false
      }]
    })
  }

  handleClick = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        else {
          return task
        }
      })
    })
  }

  handleAdd = () => {

  }

  render() {
    return (
      <div>
        <TodoList
        tdList={this.state.tasks}
        handleClick={this.handleClick}
        handleClear={this.handleClear}
        handleSubmit={this.handleSubmit}
        handleAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
