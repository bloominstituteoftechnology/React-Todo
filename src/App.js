import React from 'react';
import Form from '../src/components/TodoComponents/TodoForm';
import List from '../src/components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

  
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

  handleInput = (event) => {
    const {value} = event.target;
    this.setState({
      input: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
      if (this.state.input) {
      const obj = {
        task: this.state.input,
        id: Date.now(),
        completed: false
      }
      this.setState({
        todolist: [...this.state.todolist, obj],
        input: ''
      })
    }
  };

  crossout = (event) => {
    event.preventDefault();
    console.log('it clicks!');
    const crossedArr = event.target;
    crossedArr.classList.toggle('completed');
    console.log(crossedArr);
  }


  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <List todolist={this.state.todolist} crossout={this.crossout} />
        <Form 
          input={this.state.input} 
          handleSubmit={this.handleSubmit} 
          handleInput={this.handleInput} 
        />
      </div>
    );
  } 
}

export default App;

