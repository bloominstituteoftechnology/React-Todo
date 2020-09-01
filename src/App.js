import React from 'react';
import TodoForm from '../src/components/TodoForm'
import TodoList from '../src/components/TodoList'
import "./styles.css";

const todoList = 
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {

  

constructor(){
  super();
  this.state = { 
    todoList:todoList
  } //End State



} //End constructor 


toggleTodo = id => {
  this.setState({
    todoList: this.state.todoList.map(todo => {
      if (todo.id ===id){
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
      
        return todo;
      }
    })
  })
}

addTodo = taskName => {
  const newTask = {
    task: taskName,
    id: Date.now(), //gives us a unique string
    completed: false
  };

  this.setState({
    todoList: [...this.state.todoList, newTask]
  })
}

  clear = (todoId) => {
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed)
    })
  }




  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
    <TodoForm addTodo = {this.addTodo}/>
    <TodoList todoList = {this.state.todoList} toggleTodo= {this.toggleTodo} clear={this.clear}/>
      </div>
    );
  }
}

export default App;
