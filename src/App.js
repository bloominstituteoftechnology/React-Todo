import React from 'react';


import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';

import './components/TodoComponents/Todo.css';

const todosData = [
  {
    name: 'Call Anny',
    id: 123,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: 'Dustin',
      todos: todosData 
    };
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>LM's ToDo List</h1>
          <ToDoForm addItem={this.addItem} />
        </div>
        <ToDoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />

      </div>
    );
  }
}

export default App;


