import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const listData = [
  {taskName: 'Learn setState()'},
  {taskName: 'Style my Todo List'}
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: listData,
      taskName: ''
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  addNew = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        { taskName: this.state.taskName}
      ],
      taskName: ''
    });
  };
  
  render() {
    console.log('gloop');
    return (
      <div className='App'>
        <TodoList todoTaskList={this.state.todoList} />
        <TodoForm
        addNew = {this.addNew}
        handleChanges = {this.handleChanges}
        taskName = {this.state.taskName}
        />
      </div>
    );
  }
}

export default App;
