import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

import { dummyData } from './DummyData'

import { StyledContainer } from './StyledComp'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      dummyData
    }
  }

  toggleItem = id => {
    this.setState({
      dummyData: this.state.dummyData.map(item => {
        if (item.id === id) {
          if (item.completed === false) return {...item, completed: true}
          else return {...item, completed: false}
        }
        else return item
      })
    })
  }

  addItem = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      dummyData: [...this.state.dummyData, newTask]
    })
  }

  clearCompItems = () => {
    this.setState({
      dummyData: this.state.dummyData.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <StyledContainer>
        <h2>Welcome to your Todo App!</h2>
        <TodoList dummyData={this.state.dummyData} toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem} clearCompItems={this.clearCompItems}/>
      </StyledContainer>
    );
  }
}

export default App;
