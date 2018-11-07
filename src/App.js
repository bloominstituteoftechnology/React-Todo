import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: [
        // {
        //   task: '...todo',
        //   id: Date.now(),
        //   completed: false
        // }
      ], 

      inputText: ''
    };
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
    
  };

  handleAddTodo = event => {
    event.preventDefault();
    // create a new array with:
    // 1 - all the old data in the old array (Hint: use the spread operator)
    // 2 - the new character from this.state.inputText
    
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.inputText, id: Date.now(),  completed: false }
      ],
      inputText: ''
    });
  };


  render() {
    return (
      <div>
        <TodoList todoList={this.state.tasks}/>
        <TodoForm handleChange={this.handleChange} handleAddTodo={this.handleAddTodo} inputText={this.state.inputText}/>
      </div>
    );
  }
}

export default App;
