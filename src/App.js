import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './Styles.css'

let todoList = [
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
]

class App extends Component {
  // you will need a place to store your state in this component.
  constructor(props){
    super(props);

    console.log(localStorage.getItem('data'));
    if (localStorage.getItem('data')) {
      todoList = JSON.parse(localStorage.getItem('data'));
    }

    this.state = {
      list: todoList,
      inputText: ''
    }
  }

  // design `App` to be the parent component of your application.
  handleChange = e => {
    let newKeyValue = e.target.value;
    this.setState({
      [e.target.name]: newKeyValue
    });
    localStorage.setItem('data', JSON.stringify(newKeyValue));
  }

  toggleTaskComplete = (idSelected) => {
    let newList = this.state.list.map(task => {
      if (task.id === idSelected){
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    });

    this.setState({
      list: newList
    });
    localStorage.setItem('data', JSON.stringify(newList));
  }

  addTask = e => {
    e.preventDefault();

    let newList = [
      ...this.state.list,
      {
        task: this.state.inputText,
        id: Date.now(),
        completed: false
      }
    ];
    let newInputText = '';

    this.setState({
      list: newList,
      inputText: newInputText
    });
    localStorage.setItem('data', JSON.stringify(newList));
  }

  clearCompletedTasks = e => {
    e.preventDefault();

    let newList = this.state.list.filter(task => !task.completed);

    this.setState({
      list: newList
    });
    localStorage.setItem('data', JSON.stringify(newList));
  }

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className={'app-container'}>
        <TodoList 
          list={this.state.list} 
          toggleTaskComplete={this.toggleTaskComplete}
        />
        <TodoForm 
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          addTask={this.addTask}
          clearCompletedTasks={this.clearCompletedTasks}
        />
      </div>
    );
  }
}

export default App;