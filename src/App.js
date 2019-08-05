import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const tasksData = [
  {
    task: 'sleep',
    id: 123,
    completed: false
  },
  {
    task: 'eat',
    id: 124,
    completed: false
  },
  {
    task: 'game',
    id: 1235,
    completed: false
  },
  {
    task: 'dance',
    id: 1246,
    completed: false
  },
  {
    task: 'Do The Kirby',
    id: 1237,
    completed: false
  },
  {
    task: 'Study',
    id: 1248,
    completed: true
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
      tasks: this.state.tasks.filter(item => !item.Completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
