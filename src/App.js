import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm.js'


const list = [{
  name: 'throwup',
  complete: false
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list
    }
  }
  addTodo = (name) => {
    this.setState({
      list: [...this.state.list, {
        name: name,
        compete: false
      }]
    })

  }
  handleToggle = (name) => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.name === name) {
          return { ...item, complete: !item.complete }
        }
        return item
      })
    })
  }
  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => !item.complete)
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} clearCompleted={this.clearCompleted} handleToggle={this.handleToggle} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
