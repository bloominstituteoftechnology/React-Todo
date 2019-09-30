import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import SearchForm from './components/TodoComponents/SearchForm'

import './components/TodoComponents/Todo.css'
import { clear } from 'sisteransi';


const initialList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      name: 'Louis',
      toDo: initialList,
      displayList: initialList
    }
  }

  toggleTask = id => {
    this.setState({
      toDo: this.state.toDo.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
            };
          } else {
          return task;
        }
      })
    });
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDo: [...this.state.toDo, newTask],
      displayList: [...this.state.toDo, newTask],

    });
    console.log(this.state.toDo);
  }

  clearCompleted = () => {
    this.setState({
      toDo: this.state.toDo.filter(task => !task.completed)
    })
  }

  clearAll = () => {
    this.setState({
      toDo: ''
    })
  }

  searchList = (query) => {
    this.setState({
      displayList: this.state.toDo.filter(task => task.task.includes(query))
    });
    console.log(this.state.displayList);
  }

  clearSearch = () => {
    this.setState({
      displayList: this.state.toDo
    })
  }


  testSearch = () => {
    this.searchList("Organize");
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          displayList={this.state.displayList} 
          toggleTask={this.toggleTask} 
        />
        <SearchForm 
          searchList={this.searchList}
          testSearch={this.testSearch}
          clearSearch={this.clearSearch}
        />
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
        <button>Clear All</button>
      </div>
    );
  }
}

export default App;
