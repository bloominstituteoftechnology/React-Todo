import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: [
        {
          task: 'First Task',
          id: 1234,
          completed: false,
        },
        {
          task: 'Second Task',
          id: 1235,
          completed: false,
        }
      ],
      inputText: '',
    }
  }

  changeEventHandler = e => {
    this.setState({ inputText: e.target.value })
  }

  submitEventHandler = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {task:this.state.inputText, completed: false, id: Date.now()}
      ],
      inputText: ''
    })
  }

  markCompleted = (e, id) => {
    e.target.classList.toggle('task-completed');
    this.setState({
      todoList: this.state.todoList.map(task => {
        if(task.id === id){
          return {
            ...task, 
            completed: task.completed === true ? false : true
          };
        } else {
          return task;
        }
      })
    })
  }

  removeCompleted = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(task => task.completed === false)
    })
  }

  render() {
    return (
      <div className="app"> 
        <h1 className="header">Todo List</h1>
        <TodoList 
        todoObjects={this.state.todoList} 
        markCompleted={this.markCompleted}
        />
        <TodoForm 
        eventHandler={this.changeEventHandler} 
        submitHandler={this.submitEventHandler}
        clearCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
