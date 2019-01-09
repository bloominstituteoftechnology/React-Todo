import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoData = [
  {
    task: 'Stuff1',
    id: 1,
    completed: false
  },
  {
    task: 'Stuff2',
    id: 2,
    completed: false
  },
  {
    task: 'Stuff3',
    id: 3,
    completed: false
  },
  {
    task: 'Stuff4',
    id: 4,
    completed: false
  },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoData,
      task: ''
    };
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
        <TodoList todoDataList={this.state.todoList} />
        <TodoForm
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;
