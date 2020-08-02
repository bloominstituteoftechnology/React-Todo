import React from 'react';

//components
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const initTodoValue = ''
const todos = [{
  task: 'My todos go here',
  id: Date.now(),
  completed: false,
}]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      buildingTask: initTodoValue,
      taskList: todos
    } 
  }

  handleOnChange = event => {
    //get the name, and value on input
    const { name, value } = event.target

    //store user value on state
    //Todo:keep an eye open to see if state didn't get reset to just being the buildingTask state
    this.setState({ [name]: value })
  }
  handleAddTodo = () => {
    //accomodate all date for entry
    const newTask = {
      task: this.state.buildingTask,
      id: Date.now(),
      completed: false,
    }

    //reset building task state for a new entry
    //add new task to the state for displaying
    this.setState({
      buildingTask: initTodoValue,
      taskList: [...this.state.taskList, newTask]
    })
  }
  handleClearCompleted = event => {
    //when the  completed state is true add a line trough text
    event.preventDefault()
    //build an arraj of object that has all the todo.completed = false
    let todos = this.state.taskList.filter(todo => !todo.completed)
    //add the adjusted todos to the state
    this.setState({ taskList:todos })
  }
  handleTodoDbClick = (event, id) => {
    //toggle completed state true or false
    //how to you put the state? How do update a key value pair of an react class constructor state of array object [{}] 

    //slice() makes a copy of todos array object [{}] 
    let todos = this.state.taskList.slice()
    //go through the whole copy of todos
    todos = todos.map(todo => {
      //for each specific todo toggle the completed key value pair that matches the current ID of the task the has been double cllick
      if (todo.id === id) {
        todo.completed = !todo.completed
        if(todo.completed){
          event.target.className = event.target.className + ' completed-task'
        }else{
          //take away the task sticke through 
          event.target.className = ''
        }
        return todo;
      } else {
        //if cannot find the match then don't change anything
        return todo
      }
    })

    //set the new tasklist State value
    this.setState({ taskList:todos }) //added taskList so taskList key gets updated

  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          taskList={this.state.taskList}
          handleTodoDbClick={this.handleTodoDbClick}
          clearCompletedTodos={this.clearCompletedTodos}
        />
        <TodoForm
          handleOnChange={this.handleOnChange}
          handleAddTodo={this.handleAddTodo}
          handleClearCompleted={this.handleClearCompleted}
          buildingTask={this.state.buildingTask}
        />
      </div>
    );
  }
}

export default App;
