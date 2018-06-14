import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js'
import TodoList from './components/TodoComponents/TodoList.js';
import './components/TodoComponents/Todo.css';


//Imports localStorage if available
let initialList = [];
let storedTodos = localStorage.getItem('todoList');
if (storedTodos !== null) {
  initialList = JSON.parse(storedTodos);
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewTodoInput = this.handleNewTodoInput.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.state = {
      "todoList": initialList,
      "todoInput": '',
      "searchInput": ''
    }
  }
  
  saveToLocalStorage() {
    let stringifiedTodoList = JSON.stringify(this.state.todoList)
    localStorage.setItem("todoList", stringifiedTodoList);
  }

  handleNewTodoInput (event) {
    this.setState({
      'todoInput': event.target.value
    })
  }

  handleSearchInput (event) {
    let searchString = event.target.value;
    this.setState({
      'searchInput': searchString
    })

    let newTodoList = this.state.todoList.map((todo) => {
      let needsToBeHidden = false;
      if (todo.task.indexOf(searchString) === -1) {
        needsToBeHidden = true;
      }
      return {
        id: todo.id,
        task: todo.task,
        complete: todo.complete,
        hidden: needsToBeHidden
      };
    });

    this.setState({
      todoList: newTodoList
    });

  }

  markComplete (event) {
    let target = event.currentTarget;
    let id = target.attributes.id.value;
    let newList = this.state.todoList.slice(0,);
    for (let i in newList) {
      let todo = newList[i];
      if (todo.id === id) {
        todo.completed = !(todo.completed);
      }
    }
    this.setState({todoList: newList}, this.saveToLocalStorage);
  }

  addTodo (event) {
    let newTask = this.state.todoInput;
    if (newTask.length > 0) {
      let copy = this.state.todoList.slice(0,);
      let newTodo = {
        "task": newTask,
        "complete": false,
        "id": Date.now().toString(),
        "hidden": false
      }
      copy.push(newTodo);
      this.setState({
        "todoList": copy,
        "todoInput": ''
      }, this.saveToLocalStorage);
    }
  }

  clearCompleted () {
    let newList = this.state.todoList.filter((todo) => {
      return !todo.completed;
    });
    this.setState({todoList: newList}, this.saveToLocalStorage);
  }

  render() {
    return (
      <div className="app">
        <div className="header">
        <h2>TASK TORMENTER 3000</h2>
        </div>
        <div className="todo-list-container">
          <TodoList list={this.state.todoList} handleClick={this.markComplete}/>
          <TodoForm inputValue={this.state.todoInput} searchValue = {this.state.searchInput}  handleSearchInput={this.handleSearchInput} handleNewTodoInput={this.handleNewTodoInput} addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export default App;
