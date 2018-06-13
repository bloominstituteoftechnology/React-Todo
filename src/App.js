import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js'
import TodoList from './components/TodoComponents/TodoList.js';
import './components/TodoComponents/Todo.css';

let testArr = [
  {
    task: 'Organize Garage',
    id: '1528817077286',
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: '1528817084358',
    completed: false
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.state = {
      "todoList": testArr,
      "todoInput": ''
    }
  }

  handleChange (event) {
    this.setState({
      'todoInput': event.target.value
    })
  }

  markComplete (event) {
    let target = event.currentTarget;
    let id = target.attributes.id.value;
    let newList = this.state.todoList.slice(0,);
    for (let i in newList) {
      let todo = newList[i];
      if (todo.id === id) {
        todo.completed = !(todo.completed);
      }
    }
    this.setState({todoList: newList});
  }

  addTodo (event) {
    let copy = this.state.todoList.slice(0,);
    let newTodo = {
      "task": this.state.todoInput,
      "complete": false,
      "id": Date.now().toString()
    }
    copy.push(newTodo);
    this.setState({
      "todoList": copy,
      "todoInput": ''
    });
  }

  clearCompleted () {
    let newList = this.state.todoList.filter((todo) => {
      return !todo.completed;
    });
    this.setState({todoList: newList});
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todoList} handleClick={this.markComplete}/>
        <TodoForm value={this.state.todoInput} handleChange={this.handleChange} addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
