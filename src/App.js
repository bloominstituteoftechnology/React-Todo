import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const todoArr= [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: todoArr,
      todo: ''
    };
  }

  updateTodo = event => this.setState({ todo : event.target.value})

  addTodo = event => {
    event.preventDefault();
    let todoList = this.state.todoList.slice();
    todoList.push({ task: this.state.todo, id : Date.now(), completed: false })
    this.setState( { todoList: todoList, todo: "" })    
  }

  toggleComplete = id => {
    let todoList = this.state.todoList.slice();
    todoList = todoList.map( todo => {
      if (todo.id === id){
        todo.completed = !todo.completed;
        return todo;
      }
    });
    this.setState({todoList})
  }

  clearComplete = event => {
    event.preventDefault();
    let todoList = this.state.todoList.slice();
    todoList = todoList.filter(todo => !todo.completed);
    this.setState({todoList});
  }

  render() {console.log(this.state.todoList);
    return (
      
      <div>
        <TodoList 
        todoList = {this.state.todoList} 
        handleComplete = {this.toggleComplete}
        />
        <TodoForm   
        value = {this.state.todo}
        handleAdd = {this.addTodo}    
        handleUpdate = {this.updateTodo}
        handleComplete = {this.clearComplete}
        />
      </div>
    );
  }
}


export default App;
