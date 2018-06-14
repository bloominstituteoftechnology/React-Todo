import React from 'react';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
         todos: [
        task: 'Walk the dogs',
        id: Date.now(),
        completed: false,
    ]
  }   
}


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoForm />
        <TodoList tasks={this.state.todos}/>
      </div>
    );
  }
}

export default App;
