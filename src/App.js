import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const todoData = [
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
];

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  constructor() {
      super();
      this.state = {
          todo: todoData
      }
  }
  render() {
    return (
        <div className='app'>
            <TodoList todoData={this.state.todoData} />
            <TodoForm
                addTodo={this.addTodo}
                handleChanges={this.handleChagnes}
            />
        </div>
    )
  }
}
export default App;
