import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData
    };
  }
  clear = e => {
    e.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter(item => !item.completed)
    });
  };

  addItem = (e, itemTask) => {
    e.preventDefault();
    const existing = this.state.todoData.filter(item => item.task === itemTask);
    if (existing.length === 0) {
      const newItem = {
        task: itemTask,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todoData: [...this.state.todoData, newItem]
      });
    }
  };
  toggleItem = itemId => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };
  render() {
    return (
      <div>
        <h2>Todo App</h2>

        <TodoList
          todoData={this.state.todoData}
          toggleItem={this.toggleItem}
          clear={this.clear}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
