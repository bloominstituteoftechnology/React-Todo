import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
        { task: this.state.task }
      ],
      task: ''
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todoDataList={this.state.todoList} />
        <TodoForm addNewTodo={this.addNewTodo} handleChanges={this.handleChanges} task={this.state.task} />
      </div>
    );
  }
}

export default App;
