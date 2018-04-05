import React, {Component} from 'react';
import Todo from './components/Todo';
import TodoList from './components.TodoList';

//CCR (Class, Constructor, Render)

class App extends Componenet(
  constructor() {
    super();
    this.state = {
      arrayoftext: ['Shop for food', '']
    }
  }
  render() {
    return (
    <div>
      <input type='text' placeholder= 'add item' name ="newItem" value ={this.state.newItem} onChange={this.itemHandler}>

    </div>
    )
  }
);

export default App;
