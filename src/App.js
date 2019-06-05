import React from "react";
import './index.css'
import Todo from "./components/TodoComponents/Todo";
import todoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:  todoList,
      text: '',
    }
  }
  changeHandler = event => {
    this.setState({
      text: event.target.value,
    })
  } 
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(id === todo.id){
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    })
  }
  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: this.state.text,
      completed: false
    
    };
    this.setState(
      {todos: [...this.state.todos, newTodo,],
       text: '',
      }
    );
  };
  render(){
    const todoItems = this.state.todos.map(item => (
      <Todo 
      key={item.id} 
      item={item} 
      toggleComplete={this.toggleComplete}/>
    ));
  return (
      <div className="todo-list">
        <h2>To Do List: </h2>
        <TodoForm changeHandler={this.changeHandler} addTodo={this.addTodo} text={this.state.text} todoList={this.state.todos}/>
        {todoItems}
      </div>
    ); 
  }
  
}


export default App;

