import React from 'react';
import './App.css';
// import Todo from './components/TodoComponents/Todo.js';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

// const arr = [
//   {id: 1, task: 'learn React', completed: false},
// ]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [{id: 1, task: 'learn React', completed: true}],
      current: ''
    }
  }
  handleUpdateState = e => {
    e.preventDefault();
    let tasks = this.state.tasks.slice();
    tasks.push({
        id: Date.now(),
        task: this.state.current,
        completed: false,
      })
    this.setState({tasks,current: ''});
  };
  handleInputChange = e => {
    this.setState({current: e.target.value});
  }
  toggleCompleted = id => {
    let tasks = this.state.tasks.slice(); 
    tasks.forEach(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });

    this.setState({tasks});
  }
  removeTasks = () => {
    let remain = this.state.tasks.filter(element => element.completed===false)
    this.setState({tasks:remain})
  }
  render() {
    console.log(this.state);
    return (
      <div className='container'>
        <h1 className='title'>Todo List</h1>

        <TodoList list={this.state.tasks} crossout={this.toggleCompleted}/>
        <TodoForm handle={this.handleInputChange} 
                  update={this.handleUpdateState}
                  remove={this.removeTasks}
        />
      </div>
    );
  }
}

export default App;
