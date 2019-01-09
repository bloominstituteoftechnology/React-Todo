import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: [
        {task: 'do something',
        completed: false}, 
        {task: 'do something else',
        completed: false}
      ],
      taskText: '',
    }
  }

  handleChange = e => {
    this.setState({
      taskText: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {task: this.state.taskText, completed: false}
      ],
      taskText: ''
    })
  }

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList}/>
        <TodoForm 
        handleChange={this.handleChange} 
        taskText={this.state.taskText}
        handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
