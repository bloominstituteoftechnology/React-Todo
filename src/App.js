import React from 'react';
import './Todo.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const image = require('./components/checks.png');
const image2 = require('./components/checks2.png');

const tasks = [
  {
    task: 'Review Lesson of the Day',
    id: 123,
    completed: false
  },
  {
    task: 'Complete the Follow Along(s)',
    id: 1234,
    completed: false
  },
  {
    task: 'Attend Class Lecture',
    id: 12345,
    completed: false
  },
  {
    task: 'Begin Lesson Project',
    id: 123456,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  };

  addTask = taskName => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          name: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  toggleCompleted = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...taskId,
            completed: !completed
          };
        }
        return task;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    });
  };


  render() {
    return (
      <div className='app'>
        <h2><img src={image} alt='' />Welcome to your Todo App! <img src={image2} alt='' /></h2>
        <TodoList tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted} />
        <TodoForm
          addTask={this.addTask}
          clearCompleted={this.clearCompleted} />
      </div>
    );
  }
};

export default App;
