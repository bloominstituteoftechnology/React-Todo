import React from 'react';
import TaskAdder from './components/TaskAdder.js';
import TaskList from './components/TaskList.js';
import RemoveCompleted from './components/RemoveCompleted';
import SearchBar from './components/SearchBar';

import './components/Todo.css'

class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = { tasks: window.localStorage.getItem('tasks') === null ? [] : JSON.parse(window.localStorage.getItem('tasks')), id: window.localStorage.getItem('id') === null ? 1000 : window.localStorage.getItem('id'), search: ''};
    
  }

  addTask = data => {
    localStorage.setItem('tasks', JSON.stringify([...this.state.tasks, data]));
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
    localStorage.setItem('tasks', JSON.stringify(update));
  }

  removeCompleted = () => {
    this.setState({tasks: this.state.tasks.filter(a => !a.completed)});
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks.filter(a => !a.completed)));
  }

  updateId = () => {
    localStorage.setItem('id', this.state.id + 1);
    this.setState({id: this.state.id + 1});
  
  }

  updateSearch = e => {
    e.preventDefault();
    this.setState({search: e.target.value})
  }

  render() {
    return (
      <div>
        <SearchBar update = {this.updateSearch} search = {this.state.search}/>
        <TaskList tasks = {this.state.tasks} markComplete = {this.markComplete} search = {this.state.search}/>
        <TaskAdder addTask = {this.addTask} updateId = {this.updateId} id= {this.state.id} />
        <RemoveCompleted removeCompleted = {this.removeCompleted} />
      </div>
    );
  }
}

export default App;
