import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo'; 
import {Card} from 'react-materialize'; 
import "./App.css"; 



const myTodoList = [
];

class App extends React.Component {
  constructor(){
    super(); 
    this.state = {
      list: myTodoList, 
      input: null, 
    }
  }

  inputChangeHandler = (e) => {
  this.setState({input: e.target.value}); 

  }

  buttonClickHandler = (e) => {
    if(this.state.input != null){
    let id = Date.now(); 
    this.setState({buttonClick: true})
    let list = this.state.list.slice(); 
    list.push({task: this.state.input, id: id, completed: false})
    this.setState({list: list, input: null})
    document.getElementById('input').value = null; 
    }
  }
  
  toDoClickHandler = (e) => {
    
      
      let newList = this.state.list.slice(); 
      for(let todo in newList){
        if(newList[todo].task === e.target.innerText){
          if(newList[todo].completed === false){
            newList[todo].completed = true; 
            e.target.style.textDecoration = "line-through";  
          }else if(newList[todo].completed === true){
            newList[todo].completed = false; 
            e.target.style.textDecoration = "none" 
          }
        }
       
      }
      this.setState({todo: newList})
  }

  clearClickHandler = (e) => {
    let list = this.state.list.slice(); 
    let newList = list.filter(todo => todo.completed === false)
    console.log(newList)
    this.setState({list: newList})
  }

  
  render() {
    return (
      <div className = "container">
        <h2>To Do List</h2>
          <div className="to-do-form">
            <TodoForm  change = {this.inputChangeHandler} click = {this.buttonClickHandler} click2 = {this.clearClickHandler} />
          </div>
          <div className = "to-do-items">
          <TodoList todo = {this.state.list} click = {this.toDoClickHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
