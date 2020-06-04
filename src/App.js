import React from 'react';
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const data = [
  {
    id: 1,
    name: 'Learn React',
    isComplete: false
  },

  {
    id: 2,
    name: 'Learn Vue',
    isComplete: false
  },

  {
    id: 3,
    name: 'Learn Angular',
    isComplete: false
  },

  {
    id: 4,
    name: 'Learn Electron',
    isComplete: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
  
    this.state = {
       todoList: data
    }
  }

  addTodo = () => {}

  toggle = () => {}

  clearCompleted = () => {}
  
  
  render() {
    return (
      <div className="App">
        <h2 className='Title'>Welcome to your Todo App!</h2>
        <p>Add To Do Items Below: </p>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
