import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import jobsDone from './assets/JobsDone.mp3'
import backgroundVid from './assets/videoplayback.mp4'
import title from './assets/TITLE.png'
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
  
  
  render() {
    
    return (
      <div className='background'>
        <div className="video">
        <video autoPlay loop playsInline muted>
          <source src={backgroundVid} />
        </video>
        </div>
        <div className='board'>
          <div className='title'>
          {/* <h1 className=''>CHORECRAFT III</h1> */}
          <img src={title} alt='CHORECRAFT III'/>
          </div>
          <div className='middle'>
            <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted}/>
          </div>
          <div className='bottom' />
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
