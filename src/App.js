import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

fullList: [
  {
    val1: 'Inside an object!'
  }

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      fullList
    }
      //Store the data object of ToDo lists here. Must be able to update. How do I pass this state as a prop to TodoList?

//  task: event.target.value (from ToDoList...how to pass tht back up?)
// completed: false
// id: Date.now()

    //Build a function handler-- this will add a ToDoList item from TodoForm when called..
}
todoHandler = event => {
  // this.state.fullList.push();
  event.preventDefault();
  console.log(event.target.value);

};

handleChange = event => {
  console.log(event.target.value);
}


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm  todoHandler={this.todoHandler}/>

        <TodoList fullList={this.state.fullList}/>

      </div>
    );
  }
}

export default App;
