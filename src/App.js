import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todos from './components/TodoComponents/Todo';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: 'Billy`s List',
      todos: Todos,
    } 
  }

  addItem = () => {
    event.preventDefault();
    const input = document.querySelector('#todo-input');
    const newList = this.state.todos.slice();

    const newItem = {
      task: input.value,
      id: Date.now(),
      completed: false
    }
    newList.push(newItem);
    this.setState({todos: newList});

    input.value = "";
  }

  

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <TodoList />
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
