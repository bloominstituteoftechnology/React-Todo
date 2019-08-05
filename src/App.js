import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
const tasksData = [
  {
    task: '..come to Town',
    id: 123,
    completed: false
  },
  {
    task: 'Save The Princess Zelda',
    id: 124,
    completed: false
  },
  {
    task: 'Save The Day',
    id: 1235,
    completed: false
  },
  {
    task: 'Put Ganon in his grave',
    id: 1246,
    completed: false
  },
  {
    task: 'Become Hero',
    id: 1237,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
      tasks: tasksData // tasks: tasks,
    };

    // this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem = id => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            // Same as:
            // task: item.task,
            // id: item.id,
            // completed: item.completed,
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
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Link's Objectives</h1>
         
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
         <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
