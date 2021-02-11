import React from 'react';
import ReactDom from 'react-dom'
const todo = [
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

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state= {
      todo: todo
    }
  }

  toggleCompleted = (todoId) =>{
    //  iterate through the todo array and toggle only the item in question
    const newTodo = this.state.todo.map(todo => {
      return (todoId === todo.id ? {...todo, completed: !todo.completed} : todo )

    })
    // update 'todo' state value to this new array
    this.setState({
      ...this.state,
      todo: newTodo
    })
// adds the new item to the todo list and creating a new object and appearing on the list
    addItem = (taskName, e) =>{
      e.preventDefault();
      const newItem = {
        id: Date.now(),
        name: taskName,
        completed: false

      }
      this.setState({
        ...this.state,
        completed: [...this.state.todo, newItem]
      })
    }
// if the task is complete it will filter it out of the array
    clearCompleted = () => {
      console.log('clearing complete task')

      this.setState({
        ...this.state.todo.filter(task => !task.completed)
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <div className= 'header'>
        <h1>Todo List!</h1>
        </div>
      </div>
    );
  }
}

export default App;
