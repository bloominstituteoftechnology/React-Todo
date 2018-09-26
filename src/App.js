import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInputValue: 's',
      todos : [
      {
        task: 'test',
        id: 1234,
        completed: false
      },
      {
        task: 'Something else',
        id: 1234,
        completed: false
      },

    ]
  };
  }
  handleInput = (event) => {
    this.setState({
      currentInputValue: event.target.value
    });
  }

    handleSubmit = (event) => {
      let newTaskList = this.state.todos.concat({task: this.state.currentInputValue, id: Date.now(), completed: false})
      this.setState({todos: newTaskList});
    }
    
  render() {
    return (
      <div>
        <TodoList list={this.state.todos} />
        <TodoForm inputFunction={this.handleInput} submitFunction={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
