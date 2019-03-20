import React from 'react'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div class="container-wrapper">
        <div className="container">
          <div class="container-header">
            <img src="https://lh5.ggpht.com/5OSNXD-c2mNxKDIVx75vwZJtYf8xbT4gN_oxHZ6_bFPzujyl3fpL2WZROpjNBBx6qAra" class="icon"/>
            <h2>Todo App</h2>
          </div>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
