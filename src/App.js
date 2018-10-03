import React from 'react';
import ReactDOM from 'react-dom';
import ToDoNow from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        {taskToDo: 'Wash Dishes'},
        {taskToDo: 'Sand The Floor'},
        {taskToDo: 'Paint The Fence'},
        {taskToDo: 'Wax On'},
        {taskToDo: 'Wax Off'}
      ],
      newTask: ''
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTask = event => {
    event.preventDefault();
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        { taskToDo: this.state.newTask }
      ],
      newTask: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <ToDoNow 
        addNewTask={this.addNewTask}
        ToDoing={this.state.toDoList}
        changeHandler={this.changeHandler}
        newTask={this.state.newTask}
        />
      </div>
    );
  }
}

export default App;
