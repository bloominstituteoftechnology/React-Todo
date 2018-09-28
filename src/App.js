import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolists: [],
      textInput:'',
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  inputHandler = (event) => {
    this.setState({
      textInput: event.target.value
    }

    )
  }
  handleClick1 = () => {
   
    const newTodo = {
      task: this.state.textInput,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todolists: [...this.state.todolists, newTodo]
    }

    )
  }
  clearField = () => {
    this.setState({
      textInput: ""
    }

    )
  }
  strike= (id,event)=>{
      this.setState({
      todolists: this.state.todolists.map(obj =>{
        if(id === obj.id){
        obj.completed = !obj.completed
        }
        console.log(obj.completed)
        return obj
      })
    })
    if(event.target.style.textDecoration === ""){
      event.target.style.textDecoration = "line-through";
    }else if(event.target.style.textDecoration === "line-through"){
      event.target.style.textDecoration = ""
    }
  }
clearCompleted = () => {
  this.setState({
    todolists:this.state.todolists.filter(function (obj) {
      return obj.completed === false;
    })
  })
}
  
  render() {
     
    return (
      
      <div>
        <h1>Welcome to my list</h1>
        <TodoForm clearCompleted={this.clearCompleted} control ={this.state.textInput}inputHandler={this.inputHandler} handleClick1={this.handleClick1} clearField={this.clearField} />
        <TodoList line={this.strike} tasks={this.state.todolists} />
       
      </div>
    );
  }
}

export default App;
