import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

let todoListInitial = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  state = {todoListValue: [...todoListInitial]}

  addItem = (taskName) => {
    const newItem = {
      task: taskName,
      id: new Date(),
      completed: false
    }

    this.setState({todoListValue: [...this.state.todoListValue, newItem]})
  }
  
  toggleItem = id => {
    this.setState({
      todoListValue: this.state.todoListValue.map(item => {
        return item.id === id ? {...item, completed: !item.completed} : item
      })
    })
  }

  deleteItem = () => {
    this.setState({
      todoListValue: this.state.todoListValue.filter(item => item.completed === false)
    })
  }

  render() {
    return (
      <div className = "container">
        <TodoForm
          addItem = {this.addItem}
          deleteItem = {this.deleteItem}
        />

        <TodoList
          todoList={this.state.todoListValue}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;