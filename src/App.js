import React from 'react';
// import ReactDom from 'react-dom'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

const originalTasks = [
  {
    name: 'Bathroom',
    id: Date.now(),
    finished: false
  },
  {
    name: 'Living Room',
    id: Date.now(),
    finished: false
  },
  {
    name: 'Bedroom',
    id: Date.now(),
    finished: false
  },
  {
    name: 'Bathe Dogs',
    id: Date.now(),
    finished: false
  },
  {
    name: 'Dust',
    id: Date.now(),
    finished: false
  },
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tasks: originalTasks
    };

    // we don't need this if we use arrow functions 🎉
    // this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  toggleCompleted = itemId => {
    console.log('dg: app.js: App: togglePurchased: itemId:', itemId);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId) {
          return {
            ...item, 
            finished: !item.finished
          };
        }
        return item;
      })
    });
  };

addItem = itemName => {
  this.setState({
    tasks: [
      ...this.state.tasks,
      {
        name: itemName,
        finished: false, 
        id: Date.now()
      }
    ]
  });
};

clearCompleted = () => {
  console.log('dg: app.js: App: clearCompleted:');
  this.setState({
    tasks: this.state.tasks.filter(item => {
      return !item.finished;
    })
  });
};
  render() {
    return (
      <div className="App">
        <div className="header">
        <h1 className="todo-list">Todo List</h1>
        <TodoForm addItem={this.addItem} />
        </div>
        <TodoList 
        tasks={this.state.tasks}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
