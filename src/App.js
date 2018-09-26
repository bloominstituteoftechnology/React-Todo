import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //constructor containing state object,  which contains array of todo objects
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: [{task: 'task1'}, {task: 'task2'}]
    }
  }

  //handler function for whenever todo list item is submitted

  onSubmit = (event) => {
    this.onSubmit.bind(this);
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {
        id: Date.now(),
        task: event.target.value,
        completed: false
      }]
    });
    console.log(event.target.value)
  }

  //invoke individual components and render entire app

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <ToDoForm onSubmit = {this.onSubmit}/>
      </div>
    );
  }
}


export default App;
