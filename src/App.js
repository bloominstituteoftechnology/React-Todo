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
      taskList: [{
        task: 'My todos go here',
        id: Date.now(),
        completed: false,
      }]
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
    const newTask = {
      task: this.state.buildingTask,
      id: Date.now(),
      completed: false,
    }
    //reset building task state for a new entry
    this.setState({ ...this.state, buildingTask: initTodoValue })
    //add new task to the state for displaying
    this.setState({ ...this.state, taskList: [...this.state.taskList, newTask] })
  }
  handleClearCompleted = event => {

  }
  handleTodoDbClick = (event, todo, completed) => {
    debugger
    //toggle completed state true or false
    //how to you put the state? How do update a key value pair of an react class constructor state of array object [{}] 
    this.setState({...todo, completed: !completed})
    
    
    // this.setState(
    //   {
    //     //layer 1-2. the state and taskList
    //     ...this.state, taskList: [...this.state.taskList, 
    //       //layer3 the [ ] array 
    //       [index]: 'testing']

    //     // [index]: { ...this.state.taskList[index] },
    //     // //layer 4 the key value pair of completed
    //     // completed: !this.state.taskList[index].completed
    //   }
    // )

    //when the  completed state is true add a line trough text
    const isItCompleted = completed
    if (isItCompleted) {
      event.target.className = 'completed-task'
    }
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
