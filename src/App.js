import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { 
      data: [{}]
    }
  }
  
  toggleItem = itemId => {
    console.log(itemId)
    this.setState({
      data: this.state.data.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
     data: [...this.state.data, newItem]
    })
  }

  removeItem = e => {
    e.preventDefault();
    this.setState({
      data: this.state.data.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className="appDiv">
        <h2>Daily Tasks</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList
          data={this.state.data}
          toggleItem={this.toggleItem}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}


export default App;
