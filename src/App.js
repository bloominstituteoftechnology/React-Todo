import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

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
    items: items
  };
}



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList item={this.state.items}/>
      </div>
    );
  }
}

export default App;
