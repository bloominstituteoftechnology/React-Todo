import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

const todoData = [
  {id: '1', task: 'Clean Garage', completed: false },
  {id: '2', task:'Do Laundry', completed: false },
  {id: '3', task: 'Watch Seinfeld', completed: false },
]


class App extends React.Component {
  constructor(){
  super();
  this.state={
    toDoListData: todoData,
  }
}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toDoListData={this.state.toDoListData}/>
      </div>
    );
  }
}

export default App;
