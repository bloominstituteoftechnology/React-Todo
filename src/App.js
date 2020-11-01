import React from 'react';
import Todo from './components/Todo';

//import Todo from "./components/Todo"
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './components/Todo.css'

const todo = [
  {
    name: 'Study Class Components',
    id: 1979,
    completed: false
  },
  {
    name: 'Homeschool the spawn',
    id: 1980,
    completed: false
  },
  {
    name: 'prepare sustenance to avoid the hangry',
    id: 1981,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      //todo: todo
      todo
    }
  }

  toggleCompleted = todoId =>{
    console.log("SV: app.js: app: toggleCompleted: itemId", todoId)
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo App</h1>
          <TodoForm />
        </div>
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
