import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';
import Moment from 'Moment';
import TweenMax from 'gsap/TweenMax'

import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

const todoData = [
{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false,
  posted: '10-20-2018 2:45pm'
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false,
  posted: '6-05-2018 4:03pm'
}
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todoData,
      todoInputText: '',
      filteredTodos: [],
      searchOpen: false,
      searchText: ''
    }
  }

  handleInput = e => {
    e.persist()
    this.setState({
      [e.target.name]: e.target.value
    }, _ => {
      if(e.target.name === 'searchText') {
        this.searchTodos();
      }
    });
  }

  addTodo = e => {
    e.preventDefault();

    this.setState({
      todos: [...this.state.todos, {
        task: this.state.todoInputText,
        id: this.getID(),
        completed: false,
        posted: Moment().format('M-D-YYYY h:mma')
      }],
      todoInputText: ''
    });
  }

  getID() {
    return Date.now();
  }

  completeTodo = id => {
    console.log('click');
    this.setState({
      todos: this.state.todos.map(todo => {
        if(id === todo.id) {
          return todo.completed === false ? {...todo, completed: true} : {...todo, completed: false}
        } else {
          return todo;
        }
      })
    }, _ => {
      this.searchTodos();
    })
  }

  removeCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    }, _ => {
      this.searchTodos();
    });
  }

  toggleSearch = _ => {
    if(!this.state.searchOpen) {
      this.setState({
        searchOpen: !this.state.searchOpen
      }, _ => TweenMax.to('.todo-search', .4, {height: 42})); 
    } else {
      this.setState({
        searchOpen: !this.state.searchOpen
      }, _=> TweenMax.to('.todo-search', .4, {height: 0}));
    }
  }

  searchTodos = _ => {
    this.setState({
      filteredTodos: this.state.todos.filter(todo => todo.task.toLowerCase().includes(this.state.searchText.toLowerCase()))
  })
}

  render() {
    return (
      <div className="todo-list-cont">
        <i className="fas fa-search search-btn" onClick={this.toggleSearch}></i>
        <h1 className="title">My Todo List</h1>
        <TodoSearch 
        searchText={this.state.searchText}
        handleInput={this.handleInput}
        />
        <div className="arrow-down"></div>
        <div className="main-cont">
          <TodoList 
          todos={this.state.searchText != '' ? this.state.filteredTodos : this.state.todos}
          completeTodo={this.completeTodo}
          />
          <TodoForm 
          todoInputText={this.state.todoInputText}
          handleInput={this.handleInput}
          addTodo={this.addTodo}
          removeCompleted={this.removeCompleted} 
          />
        </div>
      </div>
    );
  }
}

export default App;