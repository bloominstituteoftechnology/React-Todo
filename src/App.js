import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const tasks = [
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
  constructor () {
    //super allows React.Component to pull structure from App
    super();
    //Declare state
    this.state = {tasks};
  }

  //Event listener, construct object for state array
  addTask = (e, task) => {
    e.preventDefault();

    //Format for new task
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    //Add new task to state array
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  };

  //Toggle true/false for task, if the taskID matches the task ID clicked
  toggleComplete = taskId => {

    this.setState({

      //Map through each object in state
      tasks: this.state.tasks.map(task => {

        //Toggle completed status
        if(taskId === task.id) {
          return{
            ...task,
            completed: !task.completed
          };
        }
        return task;

      })

    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({ tasks: this.state.tasks.filter(task => task.completed === false)});
          
  }

  render() {
    return (
      <div className="Container">
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleComplete={this.toggleComplete}
          clearCompleted={this.clearCompleted}
        />
      </div>
     
    );
  }
}

export default App;
