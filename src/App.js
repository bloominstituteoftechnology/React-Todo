import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import "./components/TodoComponents/Todo.css";

const todoItems = [
  { task: 'Finish building ToDo App', id: 1, completed: false},
  { task: 'Workout', id: 2, completed: false },
  { task: 'Do laundry', id: 3, completed: false },
  { task: 'Reward yourself by watching Initial D', id: 4, completed: false }
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

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(
        todo => todo.completed === false
      )
    })
  }

  render() {
    return (
      <div className="app-container">
        <h1>Todo List: MVP</h1>
        <TodoList 
          todoDataList={this.state.todoList} 
          changeCompletion={this.changeCompletion}
        />
        <TodoForm 
          addNewTodo={this.addNewTodo} 
          handleChanges={this.handleChanges} 
          task={this.state.task} 
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
