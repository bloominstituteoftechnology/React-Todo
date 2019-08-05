import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

let todoList = [
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
    task: 'Clean kennel',
    id: 43242314234,
    completed: true
  }
];


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: todoList
    }
  }
  
  render() {
    console.log(this.state.list);
    return (
      <>
      <div>
        <h2>test!</h2>
      </div>
      <TodoList array={this.state.list} />
      </>
    );
    
  }
}

export default App;
