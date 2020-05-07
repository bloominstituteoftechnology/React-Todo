import React from 'react';



import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

import "./components/Todo.css"

const todo = [
  {
    task: 'Watch Coding tutorials',
    id:123,
    completed: false
  },
  {
    task: 'Apply for Jobs',
    id:1234,
    completed: false
  },
  {
    task: 'Update Resume',
    id:12345,
    completed: false
  },
  {
    task: 'Surf LinkedIn',
    id:246,
    completed: false
  },
  {
    task: 'Reply to emails',
    id:2468,
    completed: false
  },
  {
    task: 'Network',
    id:369,
    completed: false
  },
  {
    task: 'Attend class',
    id:258,
    completed: false
  },
  {
    task: 'Study Hard',
    id:147,
    completed: false
  },
  {
    task: 'Write Some Code',
    id:456,
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
      todo,
    }
  }

  toggleTask = taskId => {
    this.setState({
      todo: this.setState.todo.map(task => {
        if(taskId === taskId) {
          return {
            ...todo, 
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  addNewTask = taskName => {
    this.setState({
      todo: [
        ...this.state.todo,
        {task: taskName, id: Date.now(), completed:false, }
      ]
    });
  };

  clearTodo = () => {
    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.completed;
      })
    });
  };


  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addNewTask={this.addNewTask}/>
        </div>
        <TodoList 
        toggleTask={this.toggleTask}
        todo={this.state.todo}
        clearTodo={this.clearTodo}
        />
        
      </div>
    );
  }
}

export default App;
