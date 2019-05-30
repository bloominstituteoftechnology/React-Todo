import React from 'react';

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

  addTask = taskName => {
    if(!taskName) return alert("enter todo plz")
    const newTask = {
      taskName,
      idNumber: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTask], //New array with an added task
    });
  }; 



//   this.setState({taskName: event.target.value});
// };

  render() {
    console.log(this.state.name);
    return (   
      <div className='App'>
        <h2>Welcome to your Todo Nightmare!</h2>
        <TodoList taskList={this.state.taskList}/>

      <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
