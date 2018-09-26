import React from 'react';
import Form from '../src/components/TodoComponents/TodoForm';
import List from '../src/components/TodoComponents/TodoList';

  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      input: '',
      todolist: [
        // {
        //   task: '',
        //   id: '',
        //   completed: false
        // },
      ]
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    const obj = {
      task: this.state.name,
      id: Date.now(),
      completed: false
    }
    console.log(obj);
    this.setState({
      info: [...obj],
      task: ''
    })
  };

  handleInput = (event) => {
    const {value} = event.target;

    this.setState({
      task: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <List />
        <Form input={this.state.input} handleClick={this.handleClick} handleInput={this.handleInput} />
      </div>
    );
  }
}

export default App;

