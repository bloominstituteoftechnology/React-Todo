import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { v4 as uuidv4 } from 'uuid';
import Item from './components/Item';

 let todoList = [
  {
    task: 'Organize Garage',
     id: uuidv4() ,
    completed: false,
     purchased: false
  },
  {
    task: 'Bake Cookies',
    id: uuidv4(),
    completed: false,
    purchased: false
  },
  {
    task: 'Walk the Cat',
    id: uuidv4(),
    completed: false,
    purchased: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
  
    this.state = {
      todoList: todoList,
    };
  }

  addItem = item => {
    const newItem = {
      task: item,
      completed: false,
      id: uuidv4(),
      purchased: false
    };

    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

 toggleItem = itemId => {
   
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            purchased: !item.purchased
          };
        } else {
          return item;
        }
      })
    });
  };
  
  render() {
    return (
       
  <div className="App">
      <div className="header">
        <h2> Tis The Todo List</h2>
        
          <TodoList todoList={this.state.todoList} key={this.state.todoList.id} toggleItem={this.toggleItem} />
        <TodoForm addItem={this.addItem} />
      
        
    </div>
  </div>
    );
  }
}

export default App;
