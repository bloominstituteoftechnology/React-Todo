import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import './components/TodoComponents/Todo.css';

let todoList = [];
let todoNameList = [];
let currentTodo;
const todoListItems =[];
const classList = [];

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todoNames: todoNameList,
      todos: todoList,
      todoListItems: todoListItems ,
      completedTodos: {},
      todosClasses: classList
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


markTodo = (index) =>{
  todoList[index].completed = !(todoList[index].completed);
  console.log(classList);
  this.setState((prevState, props) => {return {todosClasses: classList }});
  this.setState((prevState,props)=>{return {todos:todoList}});



  /*if(event.target.classList.includes('completed-todo')){
    event.target.classList.remove('completed-todo');
  }
  event.target.classList.add('completed-todo');
}*/}
getTodo = event =>{
  currentTodo = event.target.value;
}
 addTodo = () => {
   const newTodo =
     {task: currentTodo,
      id: Date.now(),
      completed: false
    };
   todoList.push(newTodo);
   todoListItems.push(newTodo.id);


     todoNameList.push(currentTodo);
  this.setState((prevState, props) =>{return{todos: todoList}});
   this.setState((prevState,props)=>{return {todoNames: todoNameList}});
   this.setState((prevState, props)=>{return{completedTodos: todoListItems}})
   console.log('');
 }

 clearCompletedTodos = () => {
  const result = todoList.filter(todo => todo.completed === false);
  todoNameList = [];
  result.forEach(todo => todoNameList.push(todo.task));
  todoList = result;
  this.setState({todos: todoList});
  this.setState((prevState, props) =>{return{todos: todoList}});
   this.setState((prevState,props)=>{return {todoNames: todoNameList}});
   this.setState((prevState, props)=>{return{completedTodos: todoListItems}})
 }

  render() {
    return (
      <div>
        <TodoList todoList = {todoList} function = {this.markTodo} todos ={this.state.todoNames} className = {this.state.todosClasses}/>
        <TodoForm function ={this.getTodo} function1 = {this.addTodo} function2={this.clearCompletedTodos}/>
      </div>
    );
  }
}

export default App;
