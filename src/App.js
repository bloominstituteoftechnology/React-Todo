import React from 'react';
import './App.scss';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoListItems = [
  {
    name: "",
    id: "",
    completed: false,
  },
 
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        todoListItems
      };
  }

  addItem = item => {
    this.setState({
      todoListItems: [
        ...this.state.todoListItems, 
        { name: item, completed: false, id: Date.now() }
      ]
    });
  };

  toggleComplete = id => {
    this.setState ({
      todoListItems: this.state.todoListItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item 
      )
    });
  };

  removeCompleted = () => {
    this.setState({
      todoListItems: this.state.todoListItems.filter(item => !item.completed)
    });
  };


  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Todo List:</h1>
        </div>
        <div className="todo-list">
          <TodoList todoListItems={this.state.todoListItems} toggleComplete={this.toggleComplete} />
        </div>
        <div className="form">
          <TodoForm addItem={this.addItem} />
          <button onClick={this.removeCompleted}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
