import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const taskListArray = [
  // { taskName: 'Clean the bathroom', id: 1528817077286, completed: false },
  // { taskName: 'Practice coding', id: 1528817084358, completed: false}
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: taskListArray,
      inputText: '',
      id: '',
      completed: null
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTask = ev => {
    ev.preventDefault();
    // create a new array with:
    // 1 - all the old data in the old array (Hint: use the spread operator)
    // 2 - all the new tasks from this.state.inputText
    this.setState({
      tasks: [...this.state.tasks, {taskName: this.state.inputText, id: Date.now(), completed: false }],
      inputText: '',
    })
  };

  completeTask = id => {
    this.setState({
      tasks: this.state.tasks.map(taskItem => {
        if(taskItem.id === id) {
          return {...taskItem, completed: taskItem.completed === true ? false : true };
        } else {
          return taskItem;
        }
      })
    })
  }

  clearCompleted = ev => {
    ev.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(taskItem => taskItem.completed == false)
    })
  }

  render() {
    return (

      <div className="App">

        <h1>Today</h1>

        <TodoList 
          tasksList={this.state.tasks} 
          completeTask={this.completeTask} 
        />

        <TodoForm 
          addTask={this.addTask} 
          inputText={this.state.inputText} 
          handleChange={this.handleChange}
          clearCompleted={this.clearCompleted} 
        />

      </div>
    );
  }
}

export default App;
