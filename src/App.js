import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'

const data = [
  {
    task: 'Clean Kitchen',
    id: 468463513,
    completed: false,
  },
  {
    task: 'Clean Bathroom',
    id: 45687985,
    completed: false,
  },
  {
    task: 'Walk Dog',
    id: 458789845,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      data
    }
  }

  toggleItem = id => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id ===id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        else {
          return item
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      data:this.state.data.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        data={this.state.data}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
