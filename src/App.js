import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
      ],
      holder: '',
    }
  }
    removeHandler = (event,id) => {
      event.target.classList.toggle('completed');
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
    screwthisHandler =(event) => {
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
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} removeHandler={this.removeHandler}/>
        <TodoForm holder={this.state.holder} inputHandler={this.inputHandler} clickHandler={this.clickHandler} screwthisHandler={this.screwthisHandler}/>
        

      </div>)

  }
}

export default App;
