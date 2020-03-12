import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todos = [
  {
    task: 'workout',
    id: 1,
    completed: false
  },
  {
    task: 'walk dog',
    id: 2,
    completed: false
  },
  {
    task: 'practice code',
   id: 3,
   completed: false
},
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      todos: todos,//WHY IS THIS UNDEFINED???
      }
  }
 
  clearCompleted = () => {
    this.setState ({
      task: this.state.task.filter(el =>{
        return (el.completed !== true)
    })
    })
  };

  // clearForm = () => {
  //   const newArr = this.state.todos.filter(item => {
  //     return item.completed !== true
  //     this.setState({
  //       todos: newArr
  //     })
  //   })
  // }

  toggleCompleted = clickedTodoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedTodoId){
          return(
            {
              ...todo,
              completed: !todo.completed
            }
          )
        }
        else{
          return todo;
        }
      })
    })
    console.log(this.state)
  }

clearCompleted = (_) => {
  const newArr = this.state.todos.filter(todo => {
    return todo.completed === false
  })
  this.setState({
    todos: newArr
  })
}

  addTodo = todoItem => {
    console.log('testing todo', todoItem)
    const newTodo = {
      task: todoItem,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos,
      newTodo]
    })
  }

  handleChanges = e => {
    this.setState({
      task: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
