import React from 'react';
import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos:
      [
        {
          task: 'Implement Displaying',
          id: 15566521651,
          completed: false,
        },
        {
          task: 'Implement Adding New',
          id: 156165198,
          completed: false,
        },
        {
          task: 'Implement Implement Flipping False',
          id: 651581981,
          completed: false,
        },
        {
          task: 'Implement Styling',
          id: 351965109,
          completed: false,
        },

      ],
      inputField: "",
    };
  }

  handleNewTodo = event => {
    if(this.state.inputField !== ""){
      const newTodos = this.state.todos.slice();
      newTodos.push({
        task: this.state.inputField,
        id: Date.now(),
        completed: false,
      });
      this.setState({
        todos: newTodos,
        inputField: "",
      });
    }
  }

  handleKeyPress = event => {
    if(event.key === "Enter"){
      this.handleNewTodo();
    }
  }

  handleInputChange = event => {
    console.log(event);
    let newInput = event.target.value;
    this.setState({
      inputField: newInput,
    });
  }

  render() {
    return (
      <div className="app-container">
        <TodoList list={this.state.todos}/>
        <TodoForm handleEnter={this.handleKeyPress} change={this.handleInputChange} addClick={this.handleNewTodo} />
      </div>
    );
  }
}

export default App;
