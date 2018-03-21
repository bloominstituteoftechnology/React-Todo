import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '', 
    }
  }

  addTodo = (event) => {
    event.preventDefault();
    let newTodo = {'text': this.state.newTodo, 'completed': false}
    let todos = this.state.todos;
    todos.push(newTodo);
    this.setState({
        todos: todos,
        newTodo: ''
    })
  }

  handleChange= (event) => {
    this.setState({
        newTodo: event.target.value,
    }); 
 }

  render() {
    return (
      <div>
       <form onSubmit={this.addTodo}>
         <input class="textBox" type="text" onChange={this.handleChange} placeholder="Add a new task!" value={this.state.newTodo}/>
       </form> 
       {this.state.todos.map((item, index) => {
           return <Todo index={index} task={item}/>
       })}
      </div>
    );
  }
}

export default TodoList;