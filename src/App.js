import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const taskItems = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: taskItems,
      newTask: ""
    }
  }

  handleAddTask = (event) => {
    event.preventDefault();
    const taskItems = this.state.todo.slice();
    if (this.state.newTask.length > 0) {
      taskItems.push({task: this.state.newTask, id: Date.now(), completed: false});
      this.setState({todo: taskItems});
      this.setState({newTask: ""});
    }
  }

  handleInputChange = (event) => {
    if (event.target.value.length > 0) {
      this.setState({newTask: event.target.value});
    }
  }

  handleToggleTask = (taskId) => {
    this.setState(prevState => {
      const task = prevState.todo.find(task => task.id === taskId);
      return task.completed === false ? task.completed = true : task.completed = false;
    })
  }
  handleClearCompleted = (event) => {
    this.setState(prevState => {
      const completed = prevState.todo.filter(task => task.completed === false);
      return {todo: completed}
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList items={this.state.todo} toggleTask={this.handleToggleTask} />
        <TodoForm onItemAdd={this.handleAddTask} newTask={this.state.newTask} onItemText={this.handleInputChange} onClearCompleted={this.handleClearCompleted}/>
      </div>
    );
  }
}

export default App;
