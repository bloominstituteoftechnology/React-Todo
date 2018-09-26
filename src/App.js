import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      textInput: '',
      todos: [
        {
        task: 'finish app',
        id: 1,
        completed: false
      }
      ]
    };
  }

  handleInput = (event) => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleClick = (event) => {

  }

  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoList todo={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state