import React from 'react';
import './app.css';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        text: '',
        todos: [
        ],        
      }
    }
      removeHandler = (event,id) => {
        event.target.classList.toggle('finished');
        this.setState({
          todos: this.state.todos.map(task => {
            if(task.id === id){
              return{
                task: task.task,
                id: task.id,
                completed:!task.completed 
              } 
            }
            else{
              return task;
            }     
          })
        }) 
      }
      filters =(event) => {
        event.preventDefault()
        this.setState({
          todos: this.state.todos.filter(task => task.completed === false)
        })
      }
      inputHandler = (event) => {
        const value = event.target.value;
        this.setState({
          holder: value
        })
        console.log(value)
      }
      clickHandler = (event) => {
        event.preventDefault()
        const newObject = {
          task: this.state.holder,
          id: Date.now(),
          completed: false
        }
        console.log(newObject)
        
        this.setState({
          todos: [...this.state.todos, newObject], holder: ''
        })
        console.log(this.state.todos)
      }
    render() {
      return (
        <div>
          <h1 className="toDoTitle">Todo</h1>
          <ToDoList todos={this.state.todos} removeHandler={this.removeHandler}/>
          <ToDoForm holder={this.state.holder} inputHandler={this.inputHandler} clickHandler={this.clickHandler} filters={this.filters}/>
        </div>)
    }
  }
  
  export default App;
  