import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      task: "",
      id: Date.now(),
      completed: false
    }
  }

  //change handlers


  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <TodoForm />
        <TodoList todos={todoData}/>
      </div>
    );
  }
}

export default App;
