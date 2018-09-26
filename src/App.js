import React from 'react';
import TodoForm from '../src/components/TodoComponents/TodoForm';
// import Todo from '../src/components/TodoComponents/Todo';
import TodoList from '../src/components/TodoComponents/TodoList';

  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  

  class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(props){
      super(props);
      this.state = {
        input: '',
        todolist: [
          // {
          //   task: 'Organize Garage',
          //   id: 1528817077286,
          //   completed: false
          // },
          // {
          //   task: 'Bake Cookies',
          //   id: 1528817084358,
          //   completed: false
          // }
        ]
      }
      
    };

  // Methods and Keys Here 
  handleInput = (event) => {
    const {value} = event.target;
    // console.log(value);
    this.setState({
      input: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    }
    // console.log(obj);
    this.setState({
      todolist: [...this.state.todolist, obj],
      input: ''
    })
    // console.log(this.state.todolist);
  };


  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todolist={this.state.todolist} />
        <TodoForm 
          input={this.state.input} 
          handleSubmit={this.handleSubmit} 
          handleInput={this.handleInput} 
        />
      </div>
    );
  }
}

export default App;
