import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import SearchBar from './components/TodoComponents/SearchBar.js';
import SearchResults from './components/TodoComponents/SearchResults.js';

import './components/TodoComponents/Todo.css';

let todoList = [];
let todoContainer = [];
let todoNameList = [];
let currentTodo;
let todoListItems =[];
let todoTasks = [];
let todoIds = [];
let todoCompleted =[];
const classList = [];
let searchTerm;
let searchResults = [];

if(localStorage.getItem("todosCompleted")){
let todoCompleted =Array.from(localStorage.getItem("todosCompleted")).join("").split(",");
for(let i = 0; i<todoCompleted.length;i++){
  if(todoCompleted[i] === "true"){
    todoCompleted[i] = true;
  }else{
    todoCompleted[i] = false;
  }
}
let todoIds = Array.from(localStorage.getItem("todoIds")).join("").split(",");
let todoTasks = Array.from(localStorage.getItem("todoTasks")).join("").split(",");
todoCompleted.forEach((todo,index)=>{todoList.push(
  {task: todoTasks[index],
    id: todoIds[index],
    completed: todoCompleted[index]

  }

)});

}
/*if(localStorage.getItem("todoNames")){
   todoNameList = localStorage.getItem("todoNames");
}
if(localStorage.getItem("todoList")){
   todoListItems = localStorage.getItem("todoList");
}*/
console.log(todoList);
console.log(todoListItems);
class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todoNames: todoNameList,
      todos: todoList,
      todoListItems: todoListItems ,
      completedTodos: {},
      todosClasses: classList,
      searchResults: searchResults,
      showResults: false
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  componentDidMount(){
    this.setState((prevState, props)=>{return{todos: todoList}});
    console.log('loading!')
    console.log(this.state.todos);
  }

searchItems = (event) =>{
 let searchInput = event.target.value;
  searchTerm = searchInput;

}

clearResults = () =>{
  console.log('clearing')
  searchResults = [];
  this.setState((prevState, props) => {return {searchResults: searchResults}});
  let shouldShow = this.state.showResults;
  this.setState((prevState,props) =>{return{showResults: !shouldShow}});


}
submitSearch = (event) =>{
  console.log('search term' + searchTerm)
  let shouldShow = this.state.showResults;
  console.log('searching!');
  this.setState((prevState,props) =>{return{showResults: !shouldShow}});
  console.log(todoList)
  //searchResults = todoList.filter(todo =>{ todo.task.length >2})
  for(let i = 0;i<todoList.length;i++){
    if(todoList[i].task.indexOf(searchTerm) != -1){
      searchResults.push(todoList[i]);
    }
  }
   this.setState((prevState, props) => {return{searchResults: searchResults}});
}

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
   todoTasks.push(newTodo.task);

   todoIds.push(newTodo.id);
   todoCompleted.push(newTodo.completed);

   localStorage.setItem("todoTasks", todoTasks);
   localStorage.setItem("todoIds", todoIds);
   localStorage.setItem("todosCompleted", todoCompleted);
   localStorage.setItem("todoNames", JSON.stringify(todoNameList));
   localStorage.setItem("todoList", JSON.stringify(todoListItems)); }

 clearCompletedTodos = () => {
  console.log('clearing ' + todoList)
  const result = todoList.filter(todo => todo.completed === false);
  todoNameList = [];
  result.forEach(todo => todoNameList.push(todo.task));
  todoList = result;
  console.log(todoList)
  this.setState({todos: todoList});
  this.setState((prevState, props) =>{return{todos: todoList}});
   this.setState((prevState,props)=>{return {todoNames: todoNameList}});
   this.setState((prevState, props)=>{return{completedTodos: todoListItems}})
 }

  render() {
    return (
      <div>
        <TodoList showResults = {this.state.showResults} todoList = {todoList} function = {this.markTodo} todos ={this.state.todos} className = {this.state.todosClasses}/>
        <SearchResults resultList = {searchResults} searchResults = {this.state.searchResults} showResults ={this.state.showResults} />

        <TodoForm function ={this.getTodo} function1 = {this.addTodo} function2={this.clearCompletedTodos}/>
        <SearchBar clearSearch = {this.clearResults} showResults = {this.state.showResults} searchFunction = {this.searchItems} submitSearch = {this.submitSearch}/>
      </div>
    );
  }
}

export default App;
