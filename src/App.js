import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      task: '',
    }
  }

  clearCompleted = event => {
    event.preventDefault();

    let tdl = this.state.todoList;
    let todoList = tdl.filter(item => item.completed !== true);

    this.setState({todoList});
  }

  toggleComplete = id => {
    let todoList = this.state.todoList;

    todoList.forEach(obj => {
      if (obj.id === id) {
        let completed = !obj.completed
        obj.completed = completed;
      }
    });
    this.setState({todoList})
  }

  addTask = event => {
    event.preventDefault();
    if (this.state.task === '') return;
    let taskObj = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    let todoList = this.state.todoList;
    todoList.push(taskObj)
    this.setState({todoList, task: ''});
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }
  
  render() {
    return (
      <div className="container">
        <TodoForm 
          task={this.state.task}
          addTask={this.addTask}
          onChange={this.changeHandler}
          clear={this.clearCompleted}
        />
        <TodoList
          list={this.state.todoList} 
          toggle={this.toggleComplete}
        />
        <button onClick={this.clearCompleted} className="clear-btn">Clear Completed</button>
      </div>
    );
  }
}

export default App;
