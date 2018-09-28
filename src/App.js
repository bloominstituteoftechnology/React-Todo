import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      textInput: '',
      todos: [
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
    };
  }

  handleInput = (event) => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleAdd = (event) => {
    event.preventDefault();
    const newTodo = {
      task: this.state.textInput,
      completed: false,
      id: Date.now()
    }
    let newState = this.state.todos;
    newState.push(newTodo);
    console.log(this.state.todos, newState);
    this.setState({
      todos: newState,
      textInput: ''
    });
  }

  complete = () => {
    this.setState({
      value: this.state.textInput.strike(),
      completed: this.state.todos.completed
    })
  }

  handleClear = (event) => {
    event.preventDefault();

  }
  

  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoList
          todos={this.state.todos}
          // complete={this.complete}
        />
        <TodoForm 
          textInput={this.textInput}
          handleInput={this.handleInput} 
          handleAdd={this.handleAdd} 
        />
      </div>
    );
  }
}

export default App;


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state