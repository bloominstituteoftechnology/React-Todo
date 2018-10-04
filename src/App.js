import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoData : [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        }
      ],
      newTask: '',
    }
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTask = event => {
    event.preventDefault();
    if(!this.state.newTask) return 
    this.setState({
      todoData: [
        ...this.state.todoData,
        {task: this.state.newTask, id: Date.now(), completed: false}
      ],
      newTask: ''
    })
  }

  selectedTask = index => {
    this.setState({
      todoData: this.state.todoData.map((item, index2) => {
        if(index !== index2) {
          return item
        } else {
        return {
          ...item,
          completed: !item.completed,
        }
      }
      })
    })
  }

  removeTask = event => {
    event.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter(item => {
        return !item.completed;
      })
    })
  }

  render() {
    return (
      <div className='todoListContainer'>
        <h1>Todo List</h1>
        <TodoForm 
        addTask={this.addTask}
        changeHandler={this.changeHandler}
        newTask={this.state.newTask}
        removeTask={this.removeTask}
        />
        <h2>Task for the Day</h2>
        <TodoList 
        todoData={this.state.todoData} 
        selectedTask={this.selectedTask}/>
      </div>
    );
  }
}

export default App;
