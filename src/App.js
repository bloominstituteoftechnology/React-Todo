import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import './components/TodoComponents/Todo.css';

let todoList = [];
let todoNameList = [];
let currentTodo;
const todoListItems =[];
class App extends React.Component {

  constructor(){
    super();
    this.state ={
      todoNames: todoNameList,
      todos: todoList,
      todoListItems: todoListItems ,
      completedTodos: {}
    };
    this.addTodo = this.addTodo.bind(this);
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


markTodo = event =>{
  console.log(event.target.index)

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
   console.log(todoListItems);


     todoNameList.push(currentTodo);
     console.log(todoList);
  this.setState((prevState, props) =>{return{todos: todoList}});
   this.setState((prevState,props)=>{return {todoNames: todoNameList}});
   this.setState((prevState, props)=>{return{completedTodos: todoListItems}})
   console.log('');
 }

 clearCompletedTodos(){
  const result = todoList.filter(todo => todo.completed === true);
  todoNameList = [];
  result.forEach(todo => todoNameList.push(todo));
  todoList = result;
  this.setState({todos: todoNameList});
 }

  render() {
    return (
      <div>
        <TodoList todoList = {todoList} function = {this.markTodo} todos ={this.state.todoNames} className = {this.state.todoClass}/>
        <TodoForm function ={this.getTodo} function1 = {this.addTodo} function2={this.clearCompletedTodos}/>
      </div>
    );
  }
}

export default App;
