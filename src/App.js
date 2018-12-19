import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class Task{
  constructor(taskName){
    this.task = taskName,
    this.id = Date.now(),
    this.completed = false
  }
}

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
        new Task(this.state.inputText)
      ],
      inputText: ''
    })
  }

  render() {
    return (
      <div> 
        <h2>Todo App</h2>
        <TodoList 
        todoObjects={this.state.todoList} 
        />
        <TodoForm 
        eventHandler={this.changeEventHandler} 
        submitHandler={this.submitEventHandler}
        />
      </div>
    );
  }
}

export default App;
