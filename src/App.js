import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Laundry',
    id: 1528817084121,
    completed: false
  }
]



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: todoData,
    };
  }


  render() {
    return (
      <div>
        <TodoList todoItems={this.state.todoItems}/>
      </div>
    );
  }
}

export default App;
