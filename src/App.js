import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = ['dummy task 1', 'dummy] task 2', 'dummy task3'];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(){
      super();
      this.state = {
        Tasks: tasks
      }
    }


    addTask = taskName => {
      const newTask = {
        name: taskName,
        id: new Date(),
        iscomplete:false


      };
      this.setState({
        tasks: [...this.state.tasks, newTask]
      });
    };


  render() {
    
    return (
      <div className ="App">
        <div className="header">
        <h1>What you must do:</h1>
        <TodoForm addTask={this.addTask} />
        </div>
        {console.log(this.state)}
        <TodoList
        
          toggleTask={this.toggleTask}
          tasks= {this.state}
          />
      </div>
    );
  }
}

export default App;
