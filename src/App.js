import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
 constructor() {
   super()
   this.state = {
     tasks : [{}],
     inputText: '',
     completed: false,
     id: Date.now()
   }
 }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    handleChange = e => {
      this.setState({
      [e.target.name]:e.target.value
    })
    }

    lineThrough = id => {
      this.setState({
        tasks:this.state.tasks.map(task => {
          if(task.id === id) {
            return ({
              ...task,completed: !task.completed
            })
          }
          else {
            return task
          }
        })
      })
    }

  handleClear = e => {
    e.preventDefault();
    this.setState({
      clearOnState: [...this.state.clearOnState, this.state.TodoList]
  })
  }

   addTask = e => {
     e.preventDefault()
     this.setState({
       tasks: [...this.state.tasks, {task: this.state.inputText,
      id: Date.now(),
      completed: false}],
      inputText: ''
   })
   }

   clearComplete = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed === false)
    })
   };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.tasks} lineThrough={this.lineThrough}></TodoList>
        <TodoForm inputText={this.state.inputText} handleChange={this.handleChange}
        clearComplete={this.clearComplete} addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
