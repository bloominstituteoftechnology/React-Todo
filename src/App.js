import React from 'react';
import './components/TodoComponents/Todo.css'

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [
  {
    task: 'Style the Todo List',
    id: Date.now(),
    completed: false,
  }
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toDoList: todoList,
      inputText: '',
    };
  }

  handleChange = ev => {
    
    this.setState({
      inputText: ev.target.value
    });
  };

  addTodo = ev => {
    ev.preventDefault();
    this.setState({
      toDoList: [...this.state.toDoList, {
          task: this.state.inputText,
          id: Date.now(),
          completed: false,
        }],
        inputText: ''
    })
  }

  toggleComplete = id => {
    this.setState({ 
      toDoList: this.state.toDoList.map( task => {
        if (task.id === id) {
          return {
            ...task,
            completed: task.completed === false ? true : false
          }; 
        } else {
          return task;
        }
      }) 
    });
  }

  clearComplete = ev => {
    ev.preventDefault();
    this.setState({
      toDoList: this.state.toDoList.filter( task => task.completed === false)
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList 
          taskList={this.state.toDoList} 
          toggleComplete={this.toggleComplete} 
        />
        <TodoForm 
          inputText={this.state.inputText}
          addTask={this.addTodo}
          clearComplete={this.clearComplete} 
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
