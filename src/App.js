import React from 'react';
import ReactDOM from "react-dom";
import './App.css'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { changeExt } from 'upath';

const sample = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

const randomWord = [
  "Oh my, it's ",
  "Whoop, it's ",
  "Happy ",
  "Seems it's ",
  "Awesome, it's ",
  "Have a nice ",
  "Happy fabulous ",
  "Enjoy your "
]

const days  = ["Sunday 🖖","Monday 💪😀","Tuesday 😜","Wednesday 😌☕️","Thursday 🤗","Friday 🍻","Saturday 😴"]

class App extends React.Component {
  constructor() {
    super();
    const cache = JSON.parse(localStorage.getItem('list'))
    console.log(cache)
    if(cache == undefined) cache.push(sample)
    this.state = {
      task: "",
      list: cache,
      search: "",
      sList: []
    }
    this.date = new Date();
    this.randomWord = randomWord[Math.floor(Math.random() * (8 - 1) + 1)]
    this.day = days[this.date.getDay()]
  }

  handleInputChange = event => {
    this.setState({task: event.target.value})
  }

  handleSInputChange = event => {
    this.setState({search: event.target.value})
  }

  handleUpdateState = () => {
    const list = this.state.list.slice();
    list.push({
      task: this.state.task,
      id: Date.now(),
      completed: false
    });
    document.getElementById('myInput').value = ''
    this.setState({ list: list });
  };

  handleSearchUpdate = () => {
    const list = this.state.list.slice();
    const newList = list.filter(todo => {
      return todo.task.includes(this.state.search)
    })
    document.getElementById('searchInput').value = ''
    this.setState({ sList: list, list: newList });
  }

  updateTask = event => {
    const list = this.state.list.slice();
    const id = event.target.id
    const newList = list.map(todo => {
      if (todo.id == id)
        todo.completed = !todo.completed
      return todo  
    })
    this.setState({list: newList})
    event.target.className = event.target.className === 'false' ? 'true' : 'false'
  }

  handleCompleted = () => {
    const list = this.state.list.slice();
    const newList = list.filter(item => !item.completed)
    
    this.setState({ list: newList});
  }

  handleSearchComplete = () => {
    this.setState({list: this.state.sList})
  }

  render() {
    localStorage.setItem('list', JSON.stringify(this.state.list))
    const s = localStorage.getItem('list')
    console.log(s)
    return (
      <div class="container">
        <div class="dayContainer">
          <h1>{`${this.randomWord} ${this.day}`}</h1>
        </div>
        <div class="todoContainer">
        <TodoForm inputChange={this.handleInputChange} sInputChange={this.handleSInputChange} dataChange={this.handleUpdateState} sdataChange={this.handleSearchUpdate} clearCompleted={this.handleCompleted} sclearCompleted={this.handleSearchComplete}/>
        <TodoList list={this.state.list} updateTask={this.updateTask}/>
        </div>
      </div>
    );
  }
}

export default App;
