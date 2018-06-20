import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: [
        {
          task: "",   // the todo title that will be shown to the user.
          id: "",  // a unique Time Stamp that will be assigned by Date.now().
          completed: "" //field should default to false and will be the field that we toggle when we complete a todo
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;