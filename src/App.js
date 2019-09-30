import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todoData = [
  {
    task: 'Clear Garage',
    id: 1234,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 4321,
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
      todo: todoData
    };
  }

  toggleItem = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }


  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };


  clearTodo = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          {console.log(this.state.todo)}
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.state.todo}
          toggleItem={this.toggleItem}
          clearTodo={this.clearTodo}

        />
      </div>
    );
  }
}

export default App;
