import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{
    constructor() {
      super();
      this.state = {
        todos: [], 
        newTodo: '',
      };

      if (window.localStorage.todos !== null) {
          this.state.todos = JSON.parse(window.localStorage.todos);
      }
    }
  
    addTodo = (event) => {
      event.preventDefault();
      const newTaskList = this.state.todos; 
      newTaskList.push(this.state.newTodo);
      this.setState({
        todos: newTaskList,
        newTodo: '',
        });

     this.saveLocalStorage();
    };

    // deleteTodo = (event) => {
    // const deleteTodoList  = this.state.todos;
    // deleteTodoList.splice(0, 1);
    // this.setState({
    //     todos: deleteTodoList
    // })

    // }
  
    // completedItem = (index) => {
    //     const newTaskList = this.state.todos;
    //     newTaskList[index].completed = !list
    // }

    handleTodoTaskInput = (event) => {
      this.setState({newTodo: event.target.value});
    };

    saveLocalStorage = () => {
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  
    render(){
      return(
        <div> 
          {this.state.todos.map((todo,index) => <Todo key={index} index={index} todo={todo} 
            // remove={this.deleteTodo.bind(this)}
          />)}
          <form onSubmit = {this.addTodo}>
            <input type = "text" onChange={this.handleTodoTaskInput} placeholder="Add a new Task" value={this.state.addTodo} />
          </form>
        </div>
      );}
  }
  

  export default TodoList;