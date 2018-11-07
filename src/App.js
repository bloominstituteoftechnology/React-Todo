import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      inputText: '',
      todoList: [
        {
          task: 'name of task',
          id: 'will use new Date();',
          completed: false,
        }
      ],
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} />
        <TodoForm 
          handleChange={this.handleChange}
          name={'inputText'}
          inputText={this.state.inputText}/>
      </div>
    );
  }
}

export default App;
