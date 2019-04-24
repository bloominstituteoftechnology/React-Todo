import React from 'react';
// import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    
    return (
      <div>
        <h1>Here's my to-do list</h1>
        {/* <Todo /> */}
        <TodoForm />
      </div>
     
    )
  }
}

export default App;
