import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import jobsDone from './assets/JobsDone.mp3'
import backgroundVid from './assets/videoplayback.mp4'
import title from './assets/TITLE.png'
const todo = [
  {
    id: 100,
    task: "Click jobs",
    completed: false
  },
  {
    id: 101,
    task: "to Mark Complete",
    completed: false
  },
  {
    id: 102,
    task: "Press 'Jobs Done?'",
    completed: false
  },
  {
    id: 103,
    task: "to remove jobs",
    completed: false
  },

 
]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      num : 0,
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
      id: this.state.num + 1,
      completed: false
    }
    this.setState({
      num: this.state.num + 1,
      todo: [...this.state.todo, newTask]
    })

  }

  jobsDone = () => {
    const audio = new Audio(jobsDone)
    audio.play()
    this.state.todo.map( e =>
      {if(e.completed === true){ 
        const curBut = document.getElementById(e.id)
     
      if(e.id % 2 === 0) {
        curBut.classList.add("swingLeft")
      } else {
        curBut.classList.add("swingRight")
      }
    }})
    setTimeout(() => {this.setState({
      todo: this.state.todo.filter( e => e.completed !== true)
    })}, 3000)
    
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
        <div className='menu'>
        <div>
         <TodoForm addTask={this.addTask} />
        </div>
        

        <span className='button'onClick={ () => this.jobsDone()}>Jobs done?</span>
        </div>
      </div>
    );
  }
}

export default App;
