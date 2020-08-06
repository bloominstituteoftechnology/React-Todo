import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


  let todoData=[
    {
      task: 'Laundry',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Mow the lawn',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Wash Dishes',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Tske out the trash',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Clean the bathroom',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Mop',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Get Groceries',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Pay rent',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Dust the vents',
      id: Date.now(),
      completed: false
    }, 
    {
      task: 'Wash the dog',
      id: Date.now(),
      completed: false
    }
  ]
;



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todoData
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
        <TodoList todoData={todoData}/>
      </div>
    );
  }
}

export default App;
