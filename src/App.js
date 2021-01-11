import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const tasks = [
  {
    name: '30 minutes of exercise',
    id: 1528817077286,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state = {
    tasks: tasks
  }
}

  render() {
    return (
      <div>
        <h2>Will's Todo App!</h2>
        <TodoForm/>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
