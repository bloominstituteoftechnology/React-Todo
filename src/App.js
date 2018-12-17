import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [],
      task: ''
    }
  }

  // set task to input
  handleToDoInput = event => {
      this.setState({ task: event.target.value });
  };

  enter = event => {
    // console.log("event: ", event);
    if(event.target.value !== ''){
      if (event.key === 'Enter') {
        this.addTodo(event);
      }
    }
  }

  // clearButtonHandleFucn = event

  // create a copy of todos[], assign id, completed and task
  addTodo = event => {  
    // this if statement does not allow to add empty objects to todos[]
    if(this.state.task !== ''){
      let newArr = [...this.state.todos] // Example: [..array] => 1, 2, 3 => [1, 2, 3] => newArr
      newArr.push(
        {
          id: Date.now(),
          completed: false,
          task: this.state.task
        }) 
      // assign content of newArr to todos and clear content of task after input
      this.setState({
        todos: newArr, 
        task: ''})
    }
    else {
      console.log("empty string")
    }
  }

  render() {
    console.log('App state.todos', this.state.todos);  
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          inputHandleFunc={this.handleToDoInput} 
          task={this.state.task} 
          enter={this.enter}
          submitButtonHandleFunc={this.addTodo}
          // clearButtonHandleFucn={}
        />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
