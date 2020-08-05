import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const data=()=>{
  let data=[
    {
      task: 'Laundry',
      id: '',
      completed: false
    },
    {
      task: 'Mow the lawn',
      id: '',
      completed: false
    },
    {
      task: 'Wash Dishes',
      id: '',
      completed: false
    },
    {
      task: 'Tske out the trash',
      id: '',
      completed: false
    },
    {
      task: 'Clean the bathroom',
      id: '',
      completed: false
    },
    {
      task: 'Mop',
      id: '',
      completed: false
    },
    {
      task: 'Get Groceries',
      id: '',
      completed: false
    },
    {
      task: 'Pay rent',
      id: '',
      completed: false
    },
    {
      task: 'Dust the vents',
      id: '',
      completed: false
    }, 
    {
      task: 'Wash the dog',
      id: '',
      completed: false
    }
  ]
};



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoForm/>
      <TodoList/>
      <Todo/>
      </div>
    );
  }
}

export default App;
