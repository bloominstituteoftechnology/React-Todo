import React from 'react';

//components
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const initTodoValue = ''
const initTaskListValue = {
  task: 'My todos go here',
  id: Date.now(),
  completed: false,
}
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      buildingTask: initTodoValue,
      taskList: [initTaskListValue]
    }
  }

  handleOnChange = event => {
    //get the name, and value on input
    const { name, value } = event.target

    //store user value on state
    this.setState({ ...this.State, [name]: value })
  }
  handleAddTodo = () => {
    //accomodate all date for entry
    const newTask = [{
      task: this.state.buildingTask,
      id: Date.now(),
      completed: false,
    }]
    //reset building task state for a new entry
    this.setState({ ...this.state, buildingTask: initTodoValue })
    //add new task to the state for displaying
    this.setState({ ...this.state, taskList: [...this.state.taskList ,newTask] })
  }
  handleClearCompleted = event => {

  }
  handleTodoDbClick = event => {

  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          taskList={this.state.taskList}
          handleTodoDbClick={this.handleTodoDbClick}
        />
        <TodoForm
          handleOnChange={this.handleOnChange}
          handleAddTodo={this.handleAddTodo}
          handleClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
