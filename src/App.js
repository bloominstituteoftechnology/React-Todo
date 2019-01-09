import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import SearchBar from './components/TodoComponents/SearchBar.js';
import './App.css'

function addTask(obj, task) {
  obj.todo.push({
    task: task,
    id: Date.now(),
    completed: false,
  });
  obj.searched.push({
    task: task,
    id: Date.now(),
    completed: false,
  });
  return obj;
}

function editTask(obj, id) {
  for (let i=0;i<obj.todo.length;i++) {
    if (obj.todo[i].id === id) {
      obj.todo[i].completed = !obj.todo[i].completed
    }
  }
  for (let i=0;i<obj.searched.length;i++) {
    if (obj.searched[i].id === id) {
      obj.searched[i].completed = !obj.searched[i].completed
    }
  }
  return obj;
}

function handleClearing(obj) {
  const filtered = obj.todo.filter(item => item.completed === false)
  obj.todo = filtered;
  obj.searched = filtered;
  return obj;
}

function searching(obj, string) {
  if (string.length > 0) {
    const searched_array = obj.todo.filter( item => { return (item.task.toUpperCase().indexOf(string.toUpperCase()) > -1)});
    obj.searched = searched_array;
    return obj
  }
  else if (string.length === 0) {
    console.log("empty")
    obj.searched = obj.todo;
    return obj
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : [],
      searched: []
    }
  }

  componentDidMount() {
    if (localStorage.getItem("todo")) {
      this.setState({todo : JSON.parse(localStorage.getItem("todo")), searched: JSON.parse(localStorage.getItem("todo")) });
    } else {
      localStorage.setItem("todo", JSON.stringify([]));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("todo", JSON.stringify(this.state.todo));
  }

  handleAdd = task => {
    this.setState(addTask(this.state, task));
  };

  todoChange = (id) => {
    this.setState(editTask(this.state, id));
  }

  handleClear = () => {
    this.setState(handleClearing(this.state));
  }

  handleSearchBar = (string) => {
    this.setState(searching(this.state, string), () => {});

  }

  render() {
    return (
      <div className="app">
        <img className="logo" src={require('./img/logo.jpg')}></img>

        <SearchBar handleSearchBar={this.handleSearchBar}/>

        <TodoList todoChange={this.todoChange} list={this.state.searched}/>
        <TodoForm handleClear={this.handleClear} onAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
