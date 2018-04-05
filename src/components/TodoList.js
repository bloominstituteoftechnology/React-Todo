import React, { Component } from "react";
import AddTodo from "./Todo"


class TodoList extends Component{
  constructor(){
    super();
    this.state = {
      todo: "",
      todoList:[]
    }
  };

  newTodo =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  createTodo =() =>{
    if(this.state.todo.length > 0){ 
      const { todoList } = this.state;
      todoList.push(this.state.todo);
      this.setState({ todoList, todo:"" });
    }
  }
  render(){
  return (<div>

    <input type="text" placeholder= "thing todo" onChange={this.newTodo} name="todo" value={this.state.todo}/>
    <button onClick={this.createTodo}> click here</button>
    <AddTodo tL={this.state.todoList}/>
    <div>{this.state.todo}</div>

  </div>)
  }
}

export default TodoList;
