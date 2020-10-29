import React from 'react';
import TaskAdder from './components/TaskAdder.js';
import TaskList from './components/TaskList.js';
import RemoveCompleted from './components/RemoveCompleted';

import './components/Todo.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], id: 0 };
  }

  addTask = data => {
    this.setState({tasks: [...this.state.tasks, data]});
    console.log(this.state.tasks);
  }

  markComplete = id =>{
    const index = this.state.tasks.findIndex(x => {
      console.log(x);
      console.log(x.id);
      console.log(id);
      return x.id == id
    }
      );
    console.log(index);
    let update = [...this.state.tasks];
    console.log(update);
    update[index].completed = !update[index].completed;
    console.log(update);
    this.setState({tasks: update});
  }

  removeCompleted = () => this.setState({tasks: this.state.tasks.filter(a => !a.completed)});

  updateId = () => this.setState({id: this.state.id + 1});

  render() {
    return (
      <div>
        <TaskList tasks = {this.state.tasks} markComplete = {this.markComplete}/>
        <TaskAdder addTask = {this.addTask} updateId = {this.updateId} id= {this.state.id} />
        <RemoveCompleted removeCompleted = {this.removeCompleted}/>
      </div>
    );
  }
}

export default App;
