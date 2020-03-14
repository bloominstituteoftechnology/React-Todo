import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      }
  }

  addTask = taskname => {
    this.setState({tasks: [...this.state.tasks, {todo: taskname, completed: false, id: Date.now() }]})
  }
  toggleClass = id => {
    this.setState({
      tasks: this.state.tasks.map((task,i) => {
        if(task.id === id){
          return {...task, completed: !task.completed};

        }
        return task;
      })
    })
  }

  clearCompleted = tasks => {
    this.setState({
      tasks: this.state.tasks.filter(t => {
        return !t.completed 
      })
    })
  }

  render() {
    return (
      <div>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
        <TodoList tasks={this.state.tasks} toggleClass={this.toggleClass}/>
      </div>
    );
  }
}

export default App;
