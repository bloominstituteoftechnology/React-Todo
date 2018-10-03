import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";
import "./components/TodoComponents/Todo.css";

let initialList = [{
  task: 'add filter',
  id: Date.now().toString(),
  complete: false,
}];

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

 markDone = event => {
    let target = event.currentTarget;
    let id = target.attributes.id.value;
    let newList = this.state.todoList;
    for (let i in newList) {
      let todo = newList[i];
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    }
    this.setState({ todoList: newList });
  }

  clearDone = () => {
    let listCopy = this.state.todoList.filter(todo => {
      return !todo.completed;
    });
    this.setState({todoList: listCopy})
  }

  render() {
    return (
    <div className='app'>
      <div className='header'>
        <h2>TaskList</h2>
      </div>
      <div className='list-container'>
        <TodoList list={this.state.todoList} handleClick={this.markDone} />
        <TodoForm
          inputValue={this.state.makeTodo}
          handleNewTodo={this.handleNewTodo}
          addTodo={this.addTodo}
          clearDone={this.clearDone}
        />

      </div>
    </div>
    );
  }
}

export default App;
