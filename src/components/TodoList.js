import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{
    constructor() {
      super();
      this.state = {
        todos: [], 
        newTodo: '',
      };
    }
  
    addTodo = (event) => {
      event.preventDefault();
      const newTaskList = this.state.todos; 
      newTaskList.push(this.state.newTodo);
      this.setState({
        todos: newTaskList,
        newTodo: '',
        });
    };
  
    handleTodoTaskInput = (event) => {
      this.setState({newTodo: event.target.value});
    };
  
    render(){
      return(
        <div> 
          {this.state.todos.map((todo,index) => <Todo key={index} todo={todo} />)}
          <form onSubmit = {this.addTodo}>
            <input type = "text" onChange={this.handleTodoTaskInput} placeholder="Add a new Task" value={this.state.addTodo} />
          </form>
        </div>
      );}
  }
  

  export default TodoList;