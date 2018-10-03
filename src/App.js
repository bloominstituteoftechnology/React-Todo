import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoData:  [
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
            task: 'do the dishes',
            id: 1528814674367,
            completed: false
          },
          {
            task: 'Get da Drinks',
            id: 152881445367,
            completed: false
          }
        ]
    };
  }
  render() {
    return (
      <div>
        <h1 className='main-header'>TODO LIST</h1>
        <TodoList data={this.state.todoData}/>
      </div>
    );
  }
}

export default App;
