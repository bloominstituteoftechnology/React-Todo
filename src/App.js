import React from 'react';
import "./components/TodoComponents/Todo.css"
import TodoForm from './components/TodoComponents/TodoForm';

const objectives = [
  {
    name: "Test Objective",
    id: 1,
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
    objectives: objectives,
    anotherObj: ''
  }
}

addObj = newObjText => {
  const newObj = {
    name: newObjText,
    id: Date.now(),
    complete: false
  }
  this.setState({
    objectives: [...this.state.objectives, newObj]
  })
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addObj={this.addObj}/>
      </div>
    );
  }
}

export default App;
