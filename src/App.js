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
    event.preventDefault(); //prevents reload
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


  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoList
          todos={this.state.todos}
        />
        <TodoForm 
          textInput={this.state.textInput}
          handleInput={this.handleInput} 
          handleAdd={this.handleAdd} 
        />
      </div>
    );
  }
}

export default App;
