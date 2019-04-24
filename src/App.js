import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: todoArray,
      newTodo: {
        task: '',
        id: '',
        completed: ''
      }
    };
  }



  
  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        task: event.target.value,
        id: Date.now(),
        completed: false
      }
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todoData: [...this.state.todoData, this.state.newTodo],
      newTodo: {
        task: '',
        id: '',
        completed: ''
      }
    });
  }
  
  render() {
    return (
      <div>
      <TodoList todoData={this.state.todoData} />
      <TodoForm newTodo={this.state.newTodo} what={this} />
      </div>
    );
  }
}

export default App;
