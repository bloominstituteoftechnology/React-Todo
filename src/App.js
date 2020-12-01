import React from 'react';

//Components
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todoData = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (){
    super()
    this.state = {todoData}
    console.log("this.state", this.state)
  }


  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList />
        <TodoForm/>
      </div>
    );
  }
}

export default App;
