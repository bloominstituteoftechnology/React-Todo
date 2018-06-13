import React from 'react';
import ToDoList from './components/ToDoComponents/ToDoList.js';
import ToDoForm from './components/ToDoComponents/ToDoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()

    this.state = {
      header: "My To Do List",
      toDos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <ToDoList />
        <ToDoForm />
      </div>
    );
  }
}

export default App;
