import React from 'react';

import '../src/components/TodoComponents/Todo.css'

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: [],
    };
  }

  toggleItem = idNumber => {
    // loop through this.state.taskList
    // find the item the user clicked on
    // toggle the boolean operator on the purchased property

    const banana = this.state.taskList.map(task => {
      
      if (task.idNumber === idNumber) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }

    })

    this.setState({taskList: banana})

  }

  addTask = taskName => {
    // check for empty input and return alert if blank
    if(!taskName) return alert("enter todo plz")
    // add an task from the form to the list
    const newTask = {
      taskName,
      idNumber: Date.now(),
      completed: false
    };

    this.setState(prevState => {
      return {
        taskList: [...prevState.taskList, newTask]
      };
    });
  }; 

  render() {
    return (   
      <div className='App'>
        <h2 className="header">Welcome to your Todo Nightmare!</h2>
        <TodoList 
          taskList={this.state.taskList}
          toggleItem={this.toggleItem}
          />
      <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
