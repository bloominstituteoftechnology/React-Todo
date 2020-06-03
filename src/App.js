import React from 'react';

const items = [
  {
    task: "Clean kitchen",
    id: 156,
    completed: false
  }, 
  {
    task: "Cook dinner",
    id: 127,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
  super();
  this.state = {
    items
  };
}



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
