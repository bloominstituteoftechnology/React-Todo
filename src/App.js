import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    const local = localStorage.getItem('tasks');
    console.log(JSON.parse(local));
    const tasks = JSON.parse(local);
    this.setState({tasks})
  }

  addTodo = (todo) => {
    console.log(todo);
    console.log(this.state.tasks);
    this.setState(state => {
      const tasks = [...state.tasks, todo];
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return {
        tasks
      }
    })
  };

  removeTodo = (id) => {
    this.setState(state => {
      const tasks = state.tasks.filter(item => item.id === id);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return {
        tasks,
      }
    })
  }

  toggleComplete = (id) => {
    this.setState(state => {
      const tasks = [...state.tasks];
      const task = tasks.find(element => element.id === id);
      if(task !== undefined) {
        task.status = !task.status;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return {
        tasks
      }
    })
  }

  removeComplete = () => {
    this.setState(state => {
      const tasks = state.tasks.filter(item => item.status !== true);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return {
        tasks,
      }
    })
  }

  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks} removeTodo={this.removeTodo} toggleComplete={this.toggleComplete}/>
        <TodoForm addTodo={this.addTodo} removeComplete={this.removeComplete}/>
      </div>
    );
  }
}

export default App;
