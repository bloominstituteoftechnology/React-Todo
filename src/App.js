import React from 'react';
import ReactDom from 'react-dom';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoInput: '',
      todoList: []
    };
  }

  onChange = e =>{
    this.setState({todoInput: e.target.value});
  }

  onSubmit = e =>{
    e.preventDefault();
    this.setState
    (
      {
        todoInput: '',
        todoList: [...this.state.todoList, this.state.todoInput]
      }
    );
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoItem={this.state.todoList} />
        <TodoForm onSubmit={this.onSubmit} value={this.state.todoInput} onChange={this.onChange}/>
      </div>
    );
  }
}

export default App;
