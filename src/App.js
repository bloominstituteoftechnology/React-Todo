import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
  state = { 
    tasks:[
      {
        task:'Organize Garage',
        id:1528817077286,
        completed:false
    },
    {
      task:'Bake Cookies',
      id:1528817084358,
      completed:false
    },
    {
      task:'Eat More Pizza',
      id:1528817084359,
      completed:false
    }
  ]
  }

  addTask = (task) => {
    
    let newTask = {
      task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks:[...this.state.tasks, newTask]
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log('App.js state',this.state.tasks)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
