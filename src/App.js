import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoData = [
  {
    task: 'Stuff1',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Stuff2',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Stuff3',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Stuff4',
    id: Date.now(),
    completed: false
  },
]

console.log(todoData);

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
