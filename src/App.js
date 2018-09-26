import React from 'react';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import TodoList from '../src/components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      input: '',
      todolist: []
    };
  }

  inputHandler = (event) => {
    const {value} = event.target;
    console.log(value);
    this.setState({
      input: value,
    });
  };

  submit = (event) => {
    event.preventDefault();
    const obj = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    }

    console.log(obj);
    this.setState({
      todolist: [...this.state.todolist, obj],
      input: ''
    })
    console.log(this.state.todolist);
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todolist={this.state.todolist} />
        <TodoForm 
          input={this.state.input} 
          submit={this.submit} 
          inputHandler={this.inputHandler} 
        />
      </div>
    );
  }
}
 export default App;