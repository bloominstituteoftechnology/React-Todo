import React from 'react';
import './App.css';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/TodoForm';

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

  changeHandler = event => {
    console.log(event.target);
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

  lineThrough = index => {
    this.setState({
      allToDos: this.state.allToDos.map((task, idx) => {
        if (index !== idx) {
          return task;
        } else {
          return {
            ...task,
            textDecoration: task.textDecoration === 'line-through' ? 'none': 'line-through'
          };
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
          <h1>Kat's List</h1>
          <div className="ListAndForm">
            <TodoList 
            allToDos={this.state.allToDos}
            newTask = {this.state.newTask}
            lineThrough = {this.lineThrough}
            />
            <TodoForm 
            changeHandler={this.changeHandler}
            addNewTask = {this.addNewTask}
            newTask = {this.state.newTask}
            />
          </div>
      </div>
    ) // return
  } // render
} // class

export default App;

