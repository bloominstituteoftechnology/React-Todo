import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import "./components/TodoComponents/Todo.css";

const todoItems = [
  { task: 'finish building ToDo App', id: 1, completed: false},
  { task: 'cook dinner', id: 2, completed: false },
  { task: 'clean kitchen', id: 3, completed: false },
  { task: 'reward yourself and buy a nintendo switch', id: 4, completed: false }
];


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todoList: todoItems,
      task: ''
    }
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        { task: this.state.task, id: Date.now(), completed: false }
      ],
      task: ''
    });
  };

  changeCompletion = id => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: todo.completed === false ? true : false
          };
          } else {
            return todo;
          }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todoDataList={this.state.todoList} changeCompletion={this.changeCompletion}/>
        <TodoForm addNewTodo={this.addNewTodo} handleChanges={this.handleChanges} task={this.state.task} />
      </div>
    );
  }
}

export default App;
