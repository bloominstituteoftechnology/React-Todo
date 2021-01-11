import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

const todosArray=[
  {
  todoName:'test item',
  id:Date.now() 
  },
  {
    todoName:'test item 2',
    id:Date.now()
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todosArray:todosArray
    };
  };



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm></ToDoForm>
        <ToDoList todosArray={this.state.todosArray}></ToDoList>
      </div>
    );
  }
}

export default App;
