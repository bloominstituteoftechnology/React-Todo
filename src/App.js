import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";


let tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];







class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }




  addTask = (task) => {
    const newTask = {
        task: task,
        id: Date.now(),
        completed: false
    }
    this.setState({
        tasks: [...this.state.tasks, newTask]
    })
}

  toggleTask = (taskId => {
    console.log("toggle this task", taskId);

    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  });





  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((task) => !task.completed)
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //- `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
  //- All of your application data will be stored here on `<App />`.
  //- All of your `handler` functions should live here on `<App />`.
  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm tasks={this.state.tasks} addTask={this.addTask} clearCompleted={this.clearCompleted}/>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask}/>
      </div>
    );
  }
}

export default App;
