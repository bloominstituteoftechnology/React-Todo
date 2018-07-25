import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
const Todos=[];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state={
      list: Todos
    }
  }
  render() {
    return (
      <div>
        <ToDoForm />
      </div>
    );
  }
}

export default App;
