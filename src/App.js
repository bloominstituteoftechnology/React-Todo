import React from 'react';
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";
import Todo from "../src/components/TodoComponents/Todo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
      id: '',
      completed: ''

    };
  }
  
    render() {
      return (
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoList />
          <TodoForm />
          <Todo />
        </div>        
      );
    }
}
export default App;
 // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state