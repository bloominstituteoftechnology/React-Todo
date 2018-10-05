import React from 'react';
import './App.css';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const allToDos = [
  {task: '', id: 123, completed: false},
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allToDos,
      newTask: '',
    }
  } //constructor

  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTask = event => {
    event.preventDefault();
    this.setState({
      allToDos: [
        ...this.state.allToDos,
        { task: this.state.newTask, id: Date.now(), completed: false}
      ],
      newTask: '',
    });
  };

  toggleCompleted = targetId => {
    this.setState({
      allToDos: this.state.allToDos.map((task, idx) => {
        if (targetId === idx) {
          return {
            ...task,
            completed: !task.completed
          }
        } // if
        return task;
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      allToDos: this.state.allToDos.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Kat's List</h1>
          <div className="ListAndForm">
            <TodoList 
            allToDos={this.state.allToDos}
            toggleCompleted = {this.toggleCompleted}
            />
            <TodoForm 
            changeHandler={this.changeHandler}
            addNewTask = {this.addNewTask}
            newTask = {this.state.newTask}
            updateInput={this.updateInput}
            clearCompleted={this.clearCompleted}
            />
          </div>
      </div>
    ) // return
  } // render
} // class
export default App;

