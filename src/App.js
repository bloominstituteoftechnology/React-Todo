import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";

let initialList = [];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: initialList,
      makeTodo: '',
      searchTerm: '',
    };

  }
  handleNewTodo = event => {
    this.setState({
      makeTodo: event.target.value
    })
  }

  addTodo = event => {
    let newTask = this.state.makeTodo;
    if (newTask.length > 0) {
      let newTodo = {
        task: newTask,
        id: Date.now().toString(),
        complete: false,
      }
      this.setState({
        todoList: [...this.state.todoList, newTodo],
        makeTodo: ''
      })
    }
  }

  render() {
    return (
    <div className='app'>
      <div className='header'>
        <h2>TaskList</h2>
      </div>
      <div className='list-container'>
        <TodoList list={this.state.todoList} />
        <TodoForm
          inputValue={this.state.makeTodo}
          handleNewTodo={this.handleNewTodo}
          addTodo={this.addTodo} />

      </div>
    </div>
    );
  }
}

export default App;
