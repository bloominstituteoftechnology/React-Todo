import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

const initialtodoData = 
  {
    task: '',
    // completed: false
  } 

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todoForm: initialtodoData
    }  
  }

  onInputChange = event => {
    
    this.setState({
      task: event.target.value
    }   
  )
  }

  onAddTodo = event => {
    event.preventDefault()
    const newTodo = {
      task: this.state.TodoForm,
      id: Date.now(),
      completed: false
    },
    newTodoList = this.state.todos.concat(newTodo);
    this.state(newTodoList)
    this.state(initialtodoData)
    }

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm onInputChange={this.state.onInputChange}
                  onAddTodo={this.state.onAddTodo}/>
      </div>
    );
  }
}

export default App;
