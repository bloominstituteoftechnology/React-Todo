import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor () {
    super();
    this.state= {
      todos: [],
      inputText: ""
    }
  }

    addTask = e => {
      e.preventDefault();
      this.setState({
        todos : [
          ...this.state.todos,
          { task : this.state.inputText, id: Date.now(), completed: false}
        ],
        inputText: ""
      })
    }

    handleChanges = e => {
      this.setState({
        inputText: e.target.value
      });      
    };

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList 
        todos={this.state.todos}
        />
        <TodoForm 
        inputText={this.state.inputText}
        handleChanges={this.handleChanges}
        addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
