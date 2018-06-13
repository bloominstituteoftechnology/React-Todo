import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todo: {},
      task: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
 
  render() {
    return (
      <div>
        <TodoList/>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
