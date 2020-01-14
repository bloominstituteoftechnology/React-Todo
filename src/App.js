import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const taskList = [
  {
    task:'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task:'Bake Cookies',
    id: 1528817084358,
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
      taskList: taskList, //update with real desired object. dummy data for dev purposes only
      todoTask: ''
    };
  };

  toggleItem = id => {
    const newTaskList = this.state.taskList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      } else {
        return task;
      }
    });

    this.setState({
      taskList: newTaskList
    });
  };

  addTask = todoTask => {
    const newTask = {
      task: todoTask,
      id: Date.now(),
      completed: false
    };

  this.setState({
    taskList: [...this.state.taskList, newTask]
    });
  };

  handleChanges = e => {
    this.setState({
      todoTask: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addTask(this.state.todoTask);
    e.target.reset();
  }

  handleClear = e => {
    e.preventDefault();
    let newList = this.state.taskList.filter(task => !task.completed);
    this.setState({ taskList: newList })
  }

  render() {
    return (
      <div className='App'>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
            addTask={this.addTask}
            handleSubmit={this.handleSubmit}
            handleChanges={this.handleChanges}
            todoTask={this.todoTask}
            handleClear={this.handleClear}
          />
        </div>
        <TodoList 
          task={this.state.taskList}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
