import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
// const todoData = require ('./components/TodoComponents/todoData.json')

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      input: '',
      todoList: [
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
      ]
    }
  };

  // Methods and Keys Here 
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h1>Todo List: MVP</h1>
        <TodoList {...this.state} />
      
      </div>
    );
  }
}

export default App;
