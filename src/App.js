import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'


// design `App` to be the parent component of your application
class App extends React.Component {
  // state store
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    }
  }

  // change handlers 


 // the this keyword gives you access to the constructor
// when there are updates to state render gets called again
// render method
  render() {
    return (
      <div>
       <TodoForm />
      </div>
    );
  }
}

export default App;
