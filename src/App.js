import React from 'react';
import  ToDoForm  from './components/TodoComponents/TodoForm';
import ToDo from './components/TodoComponents/Todo';


// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div>
        <h2>Need Todo the following items:</h2>
        <ToDo />
        <ToDoForm/>
      </div>
    );
  }
}

export default App;
