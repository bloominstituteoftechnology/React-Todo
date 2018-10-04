import React from 'react'
import './Todo.css'
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
  constructor() {
    super()
    this.idCounter = 1528817077286
    // if (window.localStorage.getItem('todos') === null || window.localStorage.getItem('todos') === undefined) {
      // example tasks
      this.state = {
        todos: [
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
      }
    // } else {
    //   // get todos from local storage
    
    //   this.state = {
    //     todos: JSON.parse(window.localStorage.getItem('todos'))
    //   }
    // }

    // explicitly bind methods that affect state
    this.addTask = this.addTask.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
    this.completeTask = this.completeTask.bind(this)
  }

  addTask(event, taskName) {
    event.preventDefault()
    let newTodo = {
      task: taskName,
      id: ++this.idCounter,
      completed: false
    }
    this.setState({
      todos: this.state.todos.concat(newTodo)
    })
  }

  clearCompleted(event) {
    event.preventDefault()
    this.setState({
      todos: this.state.todos.filter( task => task.completed === false )
    })
  }

  completeTask(event, id) {
    event.preventDefault()
    this.setState({
      todos: this.state.todos.map( todo => {
        if (todo.id === id) {
          todo.completed = todo.completed ? false : true
        }
        return todo
      })
    })
  }
  

  render() {
    window.localStorage.setItem('todos', JSON.stringify(this.state.todos))
    return (
      <div className="TodoList">
        {this.state.todos.map((todo, i) => {
          return <Todo
                  key={i} 
                  task={todo.task} 
                  completed={todo.completed} 
                  id={todo.id} 
                  completeTask={this.completeTask}/>
        })}
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
      </div>
    )
  }
}

export default TodoList;