import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';



const taskData = [
  {taskName: 'Vacuum'},
  {taskName: 'Dust'}
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: taskData,
      inputText: '',
    }
  }

  handleChange = event => {
    this.setState({
      tasks: taskData,
      inputText: ''
    })
  }

  addTask = event => {
    event.preventDefault();
    this.setState({
      tasks: [
        ...this.state.tasks,
        {taskName: this.state.inputText}
      ],
      inputText: ''
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        
      </div>
    );
  }
}

export default App;
