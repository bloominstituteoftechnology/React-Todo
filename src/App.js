import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';


const tasks = [
  {
    task: 'Organize Garage',
    id: 123,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1234,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  addTask = (e, task) => {
    e.preventDefault()
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  toggleTask = (taskId) => {
    console.log(taskId);
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (taskId === item.id) {
          return {
            ...item, completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = (e) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.filter((item) => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo List App!</h2>
        <img src="https://media3.giphy.com/media/a9RgWy99d17RC/giphy.gif?cid=ecf05e470c49512b953a53f01bbd1eb9a5d72c431cf5a569&rid=giphy.gif" alt='spongebob meme' />
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
