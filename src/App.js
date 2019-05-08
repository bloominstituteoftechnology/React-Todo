import React from 'react';
import Form from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      task: `${props.task}`
    }

  }
  completeTask = event => {
    this.setState({task: event.target.value.strike()})
  }
  render() {
    return (
      <div>

      <Form task={this.state.task} updateTask={this.updateTask}/>
      </div>
    );
  }
}

export default App;
