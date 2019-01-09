import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const listData = [
  {taskName: 'Learn setState()', isComplete: 'incomplete'},
  {taskName: 'Style my Todo List', isComplete: 'incomplete'}
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: listData,
      taskName: '',
      isComplete: ''
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  addNew = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        { taskName: this.state.taskName, isComplete: 'incomplete'}
      ],
      taskName: ''
    });
  };

  setComplete() {
    // e.preventDefault();
    console.log('blam');
    this.setState({isComplete: 'complete'
    });
  };

  render() {
    console.log('gloop');
    return (
      <div className='App'>
        <h1>Todo List: MVP</h1>
        <TodoList todoTaskList={this.state.todoList} />
        <TodoForm
        addNew = {this.addNew}
        handleChanges = {this.handleChanges}
        taskName = {this.state.taskName}
        isComplete = {this.state.isComplete}
        />
      </div>
    );
  }
}

export default App;
