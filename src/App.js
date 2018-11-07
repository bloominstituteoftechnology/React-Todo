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
      id: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTask = ev => {
    ev.preventDefault();
    // create a new array with:
    // 1 - all the old data in the old array (Hint: use the spread operator)
    // 2 - all the new tasks from this.state.inputText
    this.setState({
      tasks: [...this.state.tasks, {taskName: this.state.inputText, id: Date.now()}],
      inputText: '',
    })
  };

  render() {
    return (
      <div className="App">
        <TodoList tasksList={this.state.tasks} />
        <TodoForm 
          addTask={this.addTask} 
          inputText={this.state.inputText} 
          handleChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default App;
