import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

const itemsData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
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
      items: itemsData,
    };
  }


  render() {
    return (
      <div>
        <h1>The Greatest Todo List</h1>
        <TodoList itemsList={this.state.items}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
