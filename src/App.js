import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
 constructor() {
   super()
   this.state = {
     tasks : [],
     inputText: ''
   }
 }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    handleChange = e => {
      this.setState({
      [e.target.name]:e.target.value
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
      id: new Date(),
      completed: false}],
      inputText: ''
   })
   }

   clearComplete = () => {

   };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.tasks}></TodoList>
        <TodoForm inputText={this.state.inputText} handleChange={this.handleChange}
        clearComplete={this.handleChange} addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
