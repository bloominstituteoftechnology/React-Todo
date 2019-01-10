import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoList = [
  {taskName: 'Learn setState()', id: Date.now(), complete: false},
]

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: todoList,
      taskName: '',
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
        { taskName: this.state.taskName, id: Date.now(), complete: false}
      ],
      taskName: ''
    });
  };

  setComplete = index => {
    console.log('blam');
    this.setState({
      todoList: this.state.todoList.map((task, id) => {
        if (index !== id){
          return task;
        }
        else {
          return {
            ...task,
            complete: !task.complete
          }
        }
      })
    });
  };

  clear = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(
        task => task.complete !== true
      )
    })
  }

  render() {
    console.log('gloop');
    return (
      <div className='App'>
        <h1>Todo List: MVP</h1>
        <TodoList setComplete = {this.setComplete}
          todoList={this.state.todoList} />
        <TodoForm
        addNew = {this.addNew}
        clear = {this.clear}
        handleChanges = {this.handleChanges}
        taskName = {this.state.taskName}
        id = {Date.now()}
        // isComplete = {this.state.complete}
        />
      </div>
    );
  }
}

export default App;
