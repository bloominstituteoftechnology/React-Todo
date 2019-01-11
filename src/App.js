import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const todoData   = [
  {
    task: '',
    id: Date.now(),
    completed: false,
    textDecoration: "none"
  },
  {
    task: '',
    id: Date.now(),
    completed: false,
    textDecoration: "none"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: todoData,
      inputText: ''
    };
  }

  clearButton = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed === false)
    });
  };

  lineThrough = id => {
    console.log("function invoked!");
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: task.completed === false ? true : false
          };
        } else {
          return task;
        }
      })
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.inputText, completed: false, id: Date.now() }
      ],
      inputText: ""
    });
  };


  render() {
    return (
      <div className='main-container'>
      <h2>Welcome to your Todo App!</h2>
       <TodoList tasks={this.state.tasks} lineThrough={this.lineThrough} />
        <TodoForm
          clearButton={this.clearButton}
          addTask={this.addTask}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;