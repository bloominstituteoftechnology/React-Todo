import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {

  constructor() {
    super()
    let localTasks = localStorage.getItem('myApp_taskList_all');
    localTasks = JSON.parse(localTasks);

    this.state = {
      tasks: localTasks ? localTasks : [],
      taskTitle: '',
    };

  }

  handleChange = (taskTitle) => {
    this.setState({
      taskTitle
    });
  };

  handleAdd = () => {
    const newTask = {
      completed: false,
      id: Date.now(),
      taskTitle: this.state.taskTitle,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      taskTitle: '',
    },()=>{
      this.saveTasks();
    });
  };

  handleClear = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    }, ()=>{
      this.saveTasks();
    })
  };

  handleCompletion = (task) => {
    // task.completed = !task.completed
    const tasks = [...this.state.tasks];
    let target = tasks.find(t => task.id === t.id);
    if(target) {
      target.completed = !target.completed;
      this.setState({
        tasks
      }, ()=>{
        this.saveTasks();
      });
    }
  };

  saveTasks = () => {
    const saveData = JSON.stringify(this.state.tasks);
    localStorage.setItem('myApp_taskList_all', saveData);
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          taskList={this.state.tasks}
          handleCompletion={this.handleCompletion}
        />
        <TodoForm 
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleClear={this.handleClear}
          taskTitle={this.state.taskTitle}
        />
      </div>
    )
  }
}

export default App