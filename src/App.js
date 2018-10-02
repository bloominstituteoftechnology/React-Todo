import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchButtons from './components/TodoComponents/SearchButtons';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        tasks: [],
        holder: "",
        search:"",
        arr: [],
      }
    }   
    searchInputHandler = (event) => {
      const { value } = event.target;
      this.setState({
        search: value
      })
      this.searchHandler(event);
    }
    
    searchHandler = (event) => {
      event.preventDefault();      
      this.setState({
        arr: this.state.tasks,
        tasks: this.state.tasks.filter(task => task.task.toLowerCase().includes(this.state.search.toLowerCase()))
      })      
    }
    showAll = (event) => {
      event.preventDefault();
      this.setState({
        tasks:this.state.arr
      })
    }
    toggleHandler = (id) => {
      this.setState({
        tasks: this.state.tasks.map(task => {
          if (task.id === id) {
            return {
              task: task.task,
              id: task.id,
              completed: !task.completed
            }            
          } else {
            return task
          }          
        })
      })      
    }
    deleteHandler = () => {
      this.setState({
        tasks : this.state.tasks.filter(task => !task.completed)
      })
    }  
    inputHandler = (event) => {
      const { value } = event.target;
      this.setState({
        holder : value
      })
      this.state.tasks.completed === true ? event.target.classList.toggle('completed') : event.target.classList.remove('completed');
    }
    clickHandler = (event) => {
      event.preventDefault();
      const obj = {
        task: this.state.holder,
        id: Date.now(),
        completed: false,
      }
      this.setState(
        {tasks : [...this.state.tasks, obj,], holder: ""}
      )  
    }
    componentDidMount() {
      localStorage.getItem('tasks') && this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks')),
      })
    }
    componentWillUpdate(nextProps, state) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
    render() {
    return (
      <div className="app">
        <h1>Welcome to your Todo App!</h1>
        <input className="search" type="text" placeholder="Search..." value={this.state.search} onChange={this.searchInputHandler}></input>
        <SearchButtons searchHandler={this.searchHandler} showAll={this.showAll} />
        <TodoList tasks={this.state.tasks} toggleClass={this.toggleHandler} />
        <TodoForm deleteHandler={this.deleteHandler} value={this.state.holder} inputHandler={this.inputHandler} clickHandler = {this.clickHandler} />
      </div>
    );
  }
}

export default App;
