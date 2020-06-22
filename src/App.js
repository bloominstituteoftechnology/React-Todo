import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import jobsDone from './assets/JobsDone.mp3'

const todo = [
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
]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todo
    }
  }

  toggleCompleted = clickedTask => {
    this.setState({
      todo: this.state.todo.map( taskClicked => {
        if (taskClicked.id === clickedTask) {
          // console.log(taskClicked.id)
          return {
            ...taskClicked,
            completed: !taskClicked.completed
          };
        } else {
          return taskClicked;
        }
      })
    })
  }

  addTask = taskName => {
    
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }

  jobsDone = () => {
    const audio = new Audio(jobsDone)
    audio.play()
    this.setState({
      todo: this.state.todo.filter( e => e.completed !== true)
    })
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    
    return (
      <div>
        <h1>Job Need Doing?</h1>
        <div>
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted}/>
        </div>
        <div>
        <TodoForm addTask={this.addTask} />
        </div>

        <button onClick={ () => this.jobsDone()}>Jobs done?</button>
      </div>
    );
  }
}

export default App;
