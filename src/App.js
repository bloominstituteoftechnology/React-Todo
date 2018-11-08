import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './Styles.css'

const todoList = [
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

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      list: todoList,
      inputText: ''
    }
  }

  // design `App` to be the parent component of your application.
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleTaskComplete = (idSelected) => {
    this.setState({
      list: this.state.list.map(task => {
        if (task.id === idSelected){
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    })
  }

  addTask = e => {
    e.preventDefault();
    this.setState({
      list: [
          ...this.state.list,
          {
            task: this.state.inputText,
            id: Date.now(),
            completed: false
          }
      ],
      inputText: ''
    });
  }

  clearCompletedTasks = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(task => !task.completed)
    });
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
