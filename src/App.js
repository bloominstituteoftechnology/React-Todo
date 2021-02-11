import React from 'react';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import TaskList from './components/TodoList';



const tasks = [
  {
    task: 'Take out the garbage',
    id: 4142,
    completed: false
  },
  {
    name: 'Complete Lambda School Project',
    id: 4143,
    completed: false
  },
  {
    task: 'Exercise for 30 minutes',
    id: 4144,
    completed: false
  },
  {
    task: 'Wash the car',
    id: 4145,
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
    tasks: tasks
  }
}


  addTask = (taskName, e) => {
    console.log(e);
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    }
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }


  toggleCompleted = (taskId) => {
    const newTasks = this.state.tasks.map(task => {
      if (taskId === task.id) {
        return {
          ...task,
          completed: !tasks.completed
        }
      }
      else {return task}
    })
      this.setState({
        ...this.state,
        tasks: newTasks
      })
  }


  clearCompleted = () => {
    console.log('clearing completed tasks!')
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TaskList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted}  />
        <TodoForm tasks={this.state.tasks} addTask={this.addTask}/>
        
      </div>
    );
  }
}

export default App;
