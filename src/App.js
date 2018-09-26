import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInputValue: 's',
      todos : []
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

  onKeyPress = (event) => {
    console.log(event.key);
    if(event.key === 'Enter') {
      this.handleSubmit();
    };
  };
    
  render() {
    return (
      <div>
        <h1>Type in a Todo</h1>
        <TodoList list={this.state.todos} />
        <TodoForm inputFunction={this.handleInput} submitFunction={this.handleSubmit} enterFunction={this.onKeyPress} />
      </div>
    );
  }
}

export default App;
