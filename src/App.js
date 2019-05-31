import React from "react";
import Todo from "./components/TodoComponents/Todo";
import todoList from "./components/TodoComponents/TodoList";
import './index.css'
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:  todoList,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  render(){
    const todoItems = this.state.todos.map(item => (
      <Todo key={item.id} item={item} handleChange={this.handleChange}/>
    ));
  return (
      <div className="todo-list">
        <h2>To Do List: </h2>
        <TodoForm />
        {todoItems}
      </div>
    ); 
  }
  
}

export default App;