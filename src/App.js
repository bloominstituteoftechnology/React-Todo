import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import Data from './Data'
import '../src/components/TodoComponents/Todo.css'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={
      todos: Data
    }
  }

  addTask = title =>{
    const newTask ={
      task: title,
      id: Date.now(), 
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }

 

  


  toggleTodos = task => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.task === task) {
          return {
            ...item,
            completed: !item.completed
          };
        } else{
          return item;
        }
      })
    })

  }

  deleteCompleted = () =>{
    this.setState({
      todos: this.state.todos.filter(item => {
          return !item.completed
        
      })
  })
  }

  render() {
    return (
      <div>
        <TodoForm addTask= {this.addTask} />
        <TodoList todos={this.state.todos} 
        toggleTodos={this.toggleTodos} deleteCompleted={this.deleteCompleted}/>
      </div>
    );
  }
}

export default App;
