import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';

import './css/index.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      tasks: JSON.parse(localStorage.tasks)
  }
}

  newTask = event => {
    event.preventDefault();

    const tasksCurrent = this.state.tasks;
    const newList = tasksCurrent.slice();
    const task = document.querySelector('input').value;
    let id = undefined;


    if(newList.length > 0) {
      id = tasksCurrent[tasksCurrent.length-1].id + 1;
    } else {
      id = 1;
    }

    const completed = false;

    newList.push({ task:task, id:id, completed:completed })

    document.querySelector('input').value = "";
    const strList = JSON.stringify(newList);
    localStorage.setItem("tasks", strList);
    this.setState({tasks: newList});
  }

  completed = event => {
    const newList = this.state.tasks.slice();

    for(let i = 0; i < newList.length; i++) {
      if(event.target.innerText === newList[i].task) {
        newList[i].completed = !newList[i].completed;
        this.setState({tasks: newList});
      }
    }
  }

  removeTasks = event => {
    event.preventDefault();
    const newList = this.state.tasks.filter(item => item.completed === false);

    const strList = JSON.stringify(newList);
    localStorage.setItem("tasks", strList);
    
    this.setState({tasks: newList})
  }


  render() {
    return (
      <div className='app'>
        <h2>Keep Track of Life's Menial Tasks</h2>
        <TodoList tasks={this.state.tasks}
                  newTask={this.newTask.bind(this)}
                  completed={this.completed.bind(this)}
                  remove={this.removeTasks.bind(this)}/>
      </div>
    );
  }
}

export default App;
