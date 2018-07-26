import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todos: [
        {
          tasks: 'Organize Garage', 
          id: 1528817077286, 
          completed: false, 
        },
        {
          tasks: 'Grocery Shop', 
          id: 1528817077286,
          completed: false, 
        }
      ],
      newTodo: ''
    }
  }  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
