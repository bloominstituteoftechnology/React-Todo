import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      
      toDoTasks: 
      [
        {
          task: 'Brush Teeth',
          id: Date.now(),          
          completed: false
        },
        {
          task: 'Floss',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Mouth Wash',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Wash Hands',
          id: Date.now(),
          completed: false
        }
      ],
    }
  }
  



  render() {
    return (
      <div className = 'App'>
      <h1>To Do's</h1>
      <ToDoForm/>
      <ToDoList toDos = {this.state.toDoTasks}/>
      
      </div>
    );
  }
}

export default App;
