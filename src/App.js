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
      tasks: [
        {
          task: 'string1',
          id: 101011,
          completed: false
        },
        {
          task: 'string2',
          id: 1010112,
          completed: false
        },
        {
          task: 'string3',
          id: 1010113,
          completed: false
        },
        {
          task: 'string4',
          id: 1010114,
          completed: false
        },
        {
          task: 'string5',
          id: 1010115,
          completed: false
        },
        {
          task: 'string6',
          id: 1010116,
          completed: false
        },
      ],
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

    this.setState({tasks: newList})
  }


  render() {
    console.log(this.state)
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks}
                  newTask={this.newTask.bind(this)}
                  completed={this.completed.bind(this)}
                  remove={this.removeTasks.bind(this)}/>
      </div>
    );
  }
}

export default App;
