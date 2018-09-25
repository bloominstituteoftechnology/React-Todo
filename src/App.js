import React from 'react';
import Form from '../src/components/TodoComponents/TodoForm';

  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      input: '',
      todolist: [
        {
          task: '',
          id: 1,
          completed: false
        },
      ]
    };
  }

  handleClick = (event) => {
    this.setState({
      task: event.target.value,
      id: Date.now(),
    })
  };

  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <Form />
      </div>
    );
  }
}

export default App;

