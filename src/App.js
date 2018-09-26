import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolists: [
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
      ],
      textInput:'',
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  inputHandler = (event) => {
    this.setState({
      textInput: event.target.value
    }

    )
  }
  handleClick1 = () => {
   
    const newTodo = {
      task: this.state.textInput,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todolists: [...this.state.todolists, newTodo]
    }

    )
  }

  

  render() {
    return (
      <div>
        <TodoForm inputHandler={this.inputHandler} handleClick1={this.handleClick1} />
        <TodoList tasks={this.state.todolists} />
      </div>
    );
  }
}

export default App;
