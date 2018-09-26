import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInputValue: '',
      todos : []
      };
  }

  handleInput = (event) => {
    this.setState({
      currentInputValue: event.target.value
    });
  }

  handleSubmit = (event) => {

    if (this.state.currentInputValue === '') {
      alert('No Todo Item Entered')
    } else {
    let newTaskList = this.state.todos.concat({task: this.state.currentInputValue, key: Date.now(), completed: false})
    this.setState({todos: newTaskList, currentInputValue: ''});
    console.log(this.state.todos);
    }
  }

  onKeyPress = (event) => {
    if(event.key === 'Enter') {
      this.handleSubmit();
    };
  };
    
  render() {
    return (
      <div className="container">
        <h1>Tasks Remaining {this.state.todos.length}</h1>
        <TodoList list={this.state.todos} />
        <TodoForm inputFunction={this.handleInput} submitFunction={this.handleSubmit} enterFunction={this.onKeyPress} inputValue={this.state.currentInputValue} />
      </div>
    );
  }
}

export default App;
