import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import './css/index.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      filter: '',
      memory: []
  }

  // this.startState();
}

  newTask = event => {
    event.preventDefault();

    const tasksCurrent = this.state.tasks;
    const newList = tasksCurrent.slice();
    const task = document.querySelector('.task-item').value;
    let id = undefined;


    if(newList.length > 0) {
      id = tasksCurrent[tasksCurrent.length-1].id + 1;
    } else {
      id = 1;
    }

    const completed = false;

    newList.push({ task:task, id:id, completed:completed })

    document.querySelector('.task-item').value = "";
    const strList = JSON.stringify(newList);
    localStorage.setItem("tasks", strList);
    this.setState({tasks: newList});
  }


  completed = event => {
    const newList = this.state.tasks.slice();

    for(let i = 0; i < newList.length; i++) {
      const key1 = newList[i].task.split(' ');
      const key2 = event.target.innerText.split(' ');

      if(key1[key1.length-1] === "") {
        key1.pop();
      } else if (key2[key2.length-1 === ""]) {
        key2.pop();
      }

      if(key1.join('') === key2.join('')) {
        newList[i].completed = !newList[i].completed;
        this.setState({tasks: newList});
        break;
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


  startState = () => {
    if( localStorage.getItem('tasks') !== null) {
      this.setState({tasks: JSON.parse(localStorage.tasks)})
    }
  }

filterHandler = (event, array) => {
  this.setState({filter: event.target.value});
}

submitHandler = (event) => {
  event.preventDefault();

  if(this.state.filter === "") {
    alert('Please Enter Search Term')
    return;
  }

  const searchTerm = this.state.filter;
  const prevState = this.state.tasks;
  const filterTasks = this.state.tasks.filter(obj => obj.task.toLowerCase().includes(searchTerm.toLowerCase()));


  this.setState({
    tasks: filterTasks,
    filter: '',
    memory: prevState
  });
}

clearHandler = () => {
  this.setState({ tasks: this.state.memory, filter: '' })
}

  render() {
    return (
      <div className='app'>
        <div className='app__search'>
          <h2>Keep Track of Life's Menial Tasks</h2>

          <InputGroup>
            <InputGroupAddon addonType="prepend">
             <Button color="danger" onClick={this.clearHandler}>Clear</Button>
            </InputGroupAddon>

              <Input
                placeholder="Task To Search..."
                value={this.state.filter}
                onChange={this.filterHandler}
               />

            <InputGroupAddon addonType="append">
              <Button
                color="success"
                onClick={this.submitHandler}
                >
                Search
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <TodoList tasks={this.state.tasks}
                  newTask={this.newTask.bind(this)}
                  completed={this.completed.bind(this)}
                  remove={this.removeTasks.bind(this)}
                  loadData={this.startState.bind(this)}/>
      </div>
    );
  }
}

export default App;
