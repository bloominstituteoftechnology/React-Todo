import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{
    constructor() {
      super();
      this.state = {
        todo: ['Do laundry', 'buy groceries'], 
        newTask : '',
      };
    }
  
    addNewTask = (event) => {
      event.preventDefault();
      const newTaskList = this.state.todo; 
      newTaskList.push(this.state.newTask);
      this.setState({
        todo: newTaskList,
        newTaskList: '',
        });
    };
  
    handleTodoTaskInput = (event) => {
      this.setState({newTask: event.target.value});
    };
  
    render(){
      return(
        <div> 
          {this.state.todo.map((todo,index) => <Todo key={index} todo={todo} />)}
          <form onSubmit = {this.addNewTask}>
            <input type = "text" onChange={this.handleTodoTaskInput} placeholder="Add a new Task" value={this.state.addNewTask} />
          </form>
        </div>
      );}
  }

  export default TodoList;